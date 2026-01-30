# DashcamPlayer Website - Agent Guide

## Project Overview

This is the official website for **DashcamPlayer**, a professional dashcam video player software with GPS track visualization, speed display, and map synchronization playback. The website provides download links, changelogs, user manuals, FAQ, and help information.

**Note**: This repository contains only the marketing website, not the actual desktop application. The desktop application is a separate project supporting macOS and Windows.

## Technology Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19 (with SWC for fast compilation)
- **Styling**: Tailwind CSS 3.4.17 + shadcn/ui components
- **Routing**: react-router-dom 6.30.1
- **State Management**: TanStack Query (React Query) 5.83.0
- **UI Components**: Radix UI primitives + custom shadcn/ui components
- **Icons**: Lucide React
- **Package Manager**: npm (with bun.lockb present, Bun is also supported)

## Project Structure

```
├── public/                    # Static assets
│   ├── downloads.json         # Download links and version info
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                # Image assets (logo.png, hero.jpg)
│   ├── components/
│   │   ├── ui/                # shadcn/ui components (50+ components)
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Download.tsx       # Download section with platform buttons
│   │   ├── Footer.tsx         # Footer component
│   │   └── NavLink.tsx        # Navigation link component
│   ├── hooks/
│   │   ├── use-mobile.tsx     # Mobile breakpoint detection hook
│   │   └── use-toast.ts       # Toast notification hook
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── pages/
│   │   ├── Index.tsx          # Home page (landing page)
│   │   └── NotFound.tsx       # 404 error page
│   ├── App.tsx                # Root app component with routing
│   ├── main.tsx               # Entry point
│   ├── index.css              # Global styles + Tailwind directives
│   └── vite-env.d.ts          # Vite type declarations
├── components.json            # shadcn/ui configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript root config
├── tsconfig.app.json          # TypeScript app config
├── tsconfig.node.json         # TypeScript node config
└── eslint.config.js           # ESLint configuration
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode**: Disabled (`strict: false` in tsconfig.app.json)
- **Unused variables**: Allowed (no warnings)
- **Implicit any**: Allowed
- **Path alias**: `@/*` maps to `./src/*`

### Component Patterns
- Use functional components with arrow functions
- Use shadcn/ui components from `@/components/ui/*`
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Components use `React.forwardRef` for ref forwarding

### Styling Conventions
- Use Tailwind CSS utility classes
- Use CSS variables defined in `src/index.css` for theming
- Colors must be in HSL format
- Dark mode is supported via `.dark` class
- Common pattern: `className="bg-background text-foreground"`

### Import Order
1. React and third-party libraries
2. UI components from `@/components/ui/*`
3. Custom components from `@/components/*`
4. Hooks from `@/hooks/*`
5. Utils from `@/lib/*`
6. Assets

## Key Components

### Download Section (`src/components/Download.tsx`)
- Fetches download information from `/downloads.json`
- Supports three platforms: macOS (Apple Silicon), macOS (Intel), Windows
- Displays version info, release date, and file sizes

### shadcn/ui Components
Over 50 pre-built components in `src/components/ui/`:
- Form components: button, input, textarea, select, checkbox, radio-group, switch
- Layout: card, sheet, sidebar, resizable, separator
- Overlay: dialog, alert-dialog, drawer, popover, tooltip, hover-card
- Navigation: tabs, breadcrumb, navigation-menu, menubar, pagination
- Feedback: toast, sonner, alert, progress, skeleton
- Data display: table, badge, avatar, calendar, chart
- And more...

## Configuration Files

### shadcn/ui (`components.json`)
- Style: "default"
- Base color: "slate"
- CSS variables enabled
- Aliases configured for components, utils, ui, lib, hooks

### Tailwind CSS (`tailwind.config.ts`)
- Dark mode: "class" strategy
- Content paths: pages, components, app, src directories
- Custom theme extensions for colors, border-radius, animations
- Uses `tailwindcss-animate` plugin

### Vite (`vite.config.ts`)
- Server host: "::" (IPv6)
- Server port: 8080
- Uses `@vitejs/plugin-react-swc` for fast compilation
- Includes `lovable-tagger` plugin in development mode
- Path alias `@` resolves to `./src`

## Download Data Format

The `public/downloads.json` file contains:

```json
{
  "version": "1.1.0",
  "releaseDate": "2025-01-30",
  "releaseNotes": "...",
  "downloads": {
    "macos_arm64": { "url": "...", "label": "...", "fileName": "...", "size": "..." },
    "macos_x64": { "url": "...", "label": "...", "fileName": "...", "size": "..." },
    "windows": { "url": "...", "label": "...", "fileName": "...", "size": "..." }
  }
}
```

## Testing

- No test framework is currently configured
- No test files exist in the project

## Deployment

- The website is a static site built with Vite
- Production build output goes to `dist/` directory
- Deploy the `dist/` folder to any static hosting service

## Important Notes

1. **No backend**: This is a purely frontend project. Download links point to external URLs (OSS).
2. **Static data**: Version and download information is stored in `public/downloads.json`.
3. **Single page application**: Uses react-router-dom for client-side routing.
4. **Responsive design**: Mobile-friendly with Tailwind breakpoints.
5. **SEO**: Meta tags are defined in `index.html` for social sharing.
