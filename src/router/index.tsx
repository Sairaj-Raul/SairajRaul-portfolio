import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: typeof window !== 'undefined' ? window.location.pathname : '/',
  navigate: () => {},
  params: {},
});

export const BrowserRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return;

    // External or mailto links
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setCurrentPath(window.location.pathname);

    // Scroll handling: if target has hash, scroll to that section; otherwise scroll to top
    if (to.includes('#')) {
      const hash = to.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params: {} }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface RouteProps {
  path: string;
  element: ReactNode;
}

export const Route: React.FC<RouteProps> = () => null;

export const Routes: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentPath, navigate } = useContext(RouterContext);

  let matchedElement: ReactNode = null;
  let matchedParams: Record<string, string> = {};

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement<RouteProps>(child) || matchedElement !== null) return;

    const { path, element } = child.props;

    // Wildcard fallback
    if (path === '*') {
      matchedElement = element;
      return;
    }

    // Exact match (e.g. "/")
    if (path === currentPath) {
      matchedElement = element;
      return;
    }

    // Pattern matching with dynamic params (e.g. "/projects/:slug")
    if (path.includes(':')) {
      const pathParts = path.split('/').filter(Boolean);
      const currentParts = currentPath.split('/').filter(Boolean);

      if (pathParts.length === currentParts.length) {
        let isMatch = true;
        const tempParams: Record<string, string> = {};

        for (let i = 0; i < pathParts.length; i++) {
          if (pathParts[i].startsWith(':')) {
            const paramName = pathParts[i].slice(1);
            tempParams[paramName] = currentParts[i];
          } else if (pathParts[i] !== currentParts[i]) {
            isMatch = false;
            break;
          }
        }

        if (isMatch) {
          matchedElement = element;
          matchedParams = tempParams;
        }
      }
    }
  });

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params: matchedParams }}>
      {matchedElement}
    </RouterContext.Provider>
  );
};

export const useParams = <T extends Record<string, string>>(): T => {
  const context = useContext(RouterContext);
  return (context.params as T) || {};
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, onClick, className, ...props }) => {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export const Navigate: React.FC<{ to: string; replace?: boolean }> = ({ to, replace }) => {
  const { navigate } = useContext(RouterContext);

  useEffect(() => {
    navigate(to, { replace });
  }, [to, replace]);

  return null;
};
