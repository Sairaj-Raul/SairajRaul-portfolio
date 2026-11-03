# Sairaj Raul – Personal Developer Portfolio

> Modern, dark-themed, developer-focused personal portfolio website for **Sairaj Raul** (Full Stack Software Developer with 3+ years of experience).

Designed with a high-contrast charcoal and neon-green aesthetic, clean typography, developer-centric code panels, structured project showcases across 12+ platforms (including the EGC India ecosystem), categorized technical skills, and vertical timeline experience.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 6](https://reactrouter.com/) (Modular Single Page Application & Case Study Routes)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom dark/neon design tokens & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment Target**: Static SPA on [Vercel](https://vercel.com/) (Hobby Plan)

---

## 📁 Project Structure

```text
SairajRaul-portfolio/
├── public/
│   ├── favicon.svg                 # Developer code-bracket SVG favicon
│   └── projects/
│       ├── nailify/                # Verified Nailify production assets (Logo, Screens)
│       └── ridez/                  # Verified RIDEZ production assets (Logo, Screens)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky glassmorphism header with multi-route support
│   │   │   └── Footer.tsx          # Minimalist footer with social links & back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Headline, highlights pills, CTAs & code editor window
│   │   │   ├── StatsBar.tsx        # 9+ Live, 12+ Platforms, 3+ Years, Full Stack metrics
│   │   │   ├── About.tsx           # Bio narrative + 3 value cards (Build, Solve, Improve)
│   │   │   ├── Skills.tsx          # 7 technical skill categories + featured quick-tags
│   │   │   ├── Projects.tsx        # Interactive tabs + responsive grid
│   │   │   ├── EngineeringHighlights.tsx # 6 architectural challenge focus areas
│   │   │   ├── Experience.tsx      # Vertical timeline with neon nodes & responsibilities
│   │   │   └── Contact.tsx         # Mailto link, clipboard copy helper & social links
│   │   ├── projects/
│   │   │   ├── ProjectHero.tsx     # Reusable case study hero with logo, badges & actions
│   │   │   ├── ProjectOverview.tsx # Problem breakdown & architectural solution
│   │   │   ├── ProjectFeatures.tsx # Verified technical contribution cards
│   │   │   ├── ProjectGallery.tsx  # Responsive screenshot gallery with lightbox modal
│   │   │   ├── ProjectChallenges.tsx # Problem-and-solution engineering challenge cards
│   │   │   ├── ProjectTechStack.tsx # Grouped technology stack & infrastructure badges
│   │   │   └── ProjectNavigation.tsx # Next/Prev case study switcher & contact CTA
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button with neon glow, sizes & link modes
│   │       ├── SectionHeading.tsx  # Consistent section header with neon indicator dash
│   │       ├── CodeWindow.tsx      # Interactive code panel with window controls & syntax
│   │       ├── ProjectCard.tsx     # Card with category, description, status badge & case study link
│   │       └── StatCard.tsx        # Compact metric card with icons
│   ├── data/
│   │   ├── projects.ts             # 9 Live EGC India, 3 Upcoming, and Personal projects
│   │   ├── projects/
│   │   │   ├── index.ts            # Dynamic project details registry by slug
│   │   │   ├── nailify.ts          # Complete verified dataset for Nailify case study
│   │   │   └── ridez.ts            # Complete verified dataset for RIDEZ (HerRidez) case study
│   │   ├── skills.ts               # Categorized skills & featured stack array
│   │   ├── experience.ts           # Work experience timeline data with resume details
│   │   ├── engineeringHighlights.ts # 6 engineering challenges and technical solutions
│   │   └── portfolioInfo.ts        # Personal details, values, metrics & contact config
│   ├── pages/
│   │   ├── HomePage.tsx            # Single-page portfolio aggregation
│   │   └── ProjectDetailsPage.tsx  # Dynamic case study page renderer for /projects/:slug
│   ├── styles/
│   │   └── index.css               # Tailwind directives, custom scrollbars & glow utilities
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces for all data structures
│   ├── App.tsx                     # React Router BrowserRouter & route definitions
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML5 entry with fonts, SEO & OpenGraph tags
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS configuration for Tailwind & Autoprefixer
├── tailwind.config.js              # Tailwind custom colors, shadows, and animations
├── tsconfig.json                   # TypeScript bundler compiler options
├── tsconfig.node.json              # TypeScript Vite config options
├── vite.config.ts                  # Vite build settings & @ alias
├── .gitignore                      # Git ignore patterns
└── README.md                       # Documentation & manual execution instructions
```

---

## 🛠️ Manual Setup & Execution Commands

Follow these steps in your local terminal to install dependencies, start development, and deploy.

### 1. Initial Setup (One-time)

Open PowerShell or your preferred terminal inside the project root:

```bash
# Navigate to the project directory if not already there
cd d:\Personal\Projects\SairajRaul-portfolio

# Install all dependencies defined in package.json
npm install
```

### 2. Start Development Server

Run the local Vite development server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### 3. Production Build & Local Preview

To verify the production build bundle:

```bash
# Type check and build static files to /dist
npm run build

# Preview the production build locally
npm run preview
```

### 4. Git Version Control

Commit all created files and push to GitHub:

```bash
# Check current Git status
git status

# Stage all files
git add .

# Commit changes
git commit -m "feat: complete developer portfolio with dark/neon theme, 12+ platforms, and engineering highlights"

# Push to your GitHub repository
git push -u origin main
```

*(Note: If your default branch is `master`, use `git push -u origin master`)*

---

## 🌐 Deploying to Vercel (Hobby Free Plan)

This project is a 100% static React SPA built with Vite. It requires **zero environment variables** and **no backend**.

### Deploying via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **Add New...** → **Project**.
3. Import your GitHub repository: `Sairaj-Raul/SairajRaul-portfolio`.
4. In the configuration screen, Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.
6. Your portfolio will be live in under 1 minute with automatic SSL, CDN distribution, and continuous deployment whenever you push to GitHub!

---

## ✏️ Customization & Updating Content

All data is separated from UI components and stored in `src/data/`:
- **Personal Details & Social Links**: Edit `src/data/portfolioInfo.ts` (Email, LinkedIn, headline, bio).
- **Projects & Products**: Edit `src/data/projects.ts` (Add new live/upcoming platforms, URLs, tech stacks).
- **Technical Skills**: Edit `src/data/skills.ts` (Add or rearrange technologies by category).
- **Work Experience**: Edit `src/data/experience.ts` (Update current company, roles, dates).
- **Engineering Highlights**: Edit `src/data/engineeringHighlights.ts` (Update technical problems and solutions).
