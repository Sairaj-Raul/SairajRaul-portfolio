import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from './router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-neon selection:text-dark-950">
              {/* Background subtle noise/grid texture */}
              <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

              {/* Sticky Header */}
              <Navbar />

              {/* Main Content Sections */}
              <main className="flex-grow">
                <HomePage />
              </main>

              {/* Footer */}
              <Footer />
            </div>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
