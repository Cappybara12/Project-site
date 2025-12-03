# Project Structure Documentation

## Architecture Overview

This project follows a **Domain-Driven Design (DDD)** approach with Next.js 14 App Router. Each major feature has its own route group with its components, actions, and utilities.

## Directory Structure

```
yuno-clone/
├── app/
│   ├── (homepage)/                 # Homepage route group
│   │   ├── actions/               # Server actions for homepage
│   │   ├── components/            # Homepage-specific components
│   │   │   ├── Hero.tsx           # Hero section with video
│   │   │   ├── TrustedBy.tsx      # Animated logo carousel
│   │   │   ├── GlobalRegions.tsx  # Interactive region selector
│   │   │   ├── RevenueGraph.tsx   # Animated revenue chart
│   │   │   ├── ImpactMetrics.tsx  # Animated counters
│   │   │   ├── UnifiedInfrastructure.tsx  # Solution cards
│   │   │   ├── StickyFeatures.tsx # Scroll-sync navigation
│   │   │   ├── BeforeAfterYuno.tsx # Comparison section
│   │   │   ├── Industries.tsx     # Industry cards with animations
│   │   │   ├── Testimonials.tsx   # Carousel with videos
│   │   │   ├── FAQ.tsx            # Expandable accordion
│   │   │   ├── CTASection.tsx     # Call-to-action with animations
│   │   │   └── HomePage.tsx       # Main page orchestrator
│   │   ├── layout.tsx             # Homepage layout (with Navbar/Footer)
│   │   └── page.tsx               # Homepage entry point
│   │
│   ├── blog/                      # Blog route group
│   │   ├── layout.tsx             # Blog layout
│   │   └── page.tsx               # Blog listing with filters
│   │
│   ├── book-a-demo/               # Demo booking route group
│   │   ├── layout.tsx             # Demo layout
│   │   └── page.tsx               # Demo form
│   │
│   ├── trust-and-security/        # Trust & Security route group
│   │   ├── layout.tsx             # T&S layout
│   │   └── page.tsx               # Sticky sections page
│   │
│   ├── components/                # Shared components
│   │   ├── common/               # Common components
│   │   │   ├── Navbar.tsx        # Main navigation
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   └── LoadingScreen.tsx # Initial loading animation
│   │   ├── shadcn/               # shadcn/ui components
│   │   ├── theme/                # Theme components
│   │   └── ui/                   # Reusable UI components
│   │
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   │   └── utils.ts              # cn() utility and helpers
│   ├── contexts/                  # React Context providers
│   ├── providers/                 # App-level providers
│   │
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles & design tokens
│   └── favicon.ico                # Site favicon
│
├── data/                          # Static data files
│   ├── regions.js                 # Payment regions data
│   ├── features.js                # Features data
│   ├── industries.js              # Industries data
│   ├── testimonials.js            # Testimonials data
│   ├── companies.js               # Company logos data
│   └── blog.js                    # Blog posts data
│
├── public/                        # Static assets
│   ├── placeholders/              # Placeholder images
│   │   ├── globe-*.svg           # Region globe images
│   │   └── testimonial-*.jpg     # Testimonial images
│   └── yuno-demo.mov             # Hero video
│
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.js             # Tailwind CSS config
├── next.config.mjs                # Next.js config
├── README.md                      # Project documentation
└── STRUCTURE.md                   # This file
```

## Key Principles

### 1. Domain-Driven Design
Each route group (`(homepage)`, `blog`, `book-a-demo`, `trust-and-security`) is a self-contained domain with its own:
- Components
- Actions (server-side logic)
- Utilities (if needed)

### 2. Component Organization

#### Route-Specific Components
Components that are only used in one route stay in that route's `components/` folder.

**Example**: `app/(homepage)/components/Hero.tsx` is only used on the homepage.

#### Shared Components
Components used across multiple routes go in `app/components/`:
- `common/`: Navbar, Footer, LoadingScreen
- `ui/`: Button, Card, Input, etc. (reusable UI primitives)
- `shadcn/`: shadcn/ui components
- `theme/`: Theme switcher, etc.

### 3. Data Management
Static data lives in the `data/` folder as JavaScript modules for easy import.

### 4. Utilities and Helpers
- `app/lib/`: Pure utility functions (e.g., `cn()` for className merging)
- `app/hooks/`: Custom React hooks
- `app/contexts/`: React Context for global state
- `app/providers/`: App-level providers (theme, auth, etc.)

## Import Patterns

### From Route-Specific Components
```typescript
// Import from same route
import { Hero } from "./components/Hero";

// Import shared components
import { Navbar } from "../../components/common/Navbar";
import { Button } from "../../components/ui/Button";

// Import utilities
import { cn } from "../../lib/utils";
```

### From Shared Components
```typescript
// Shared components should use absolute or relative paths
import { cn } from "../../lib/utils";
```

## Naming Conventions

### Files
- **Components**: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`, `formatDate.ts`)
- **Data**: camelCase (e.g., `regions.js`, `industries.js`)

### Folders
- **Route Groups**: kebab-case with parentheses (e.g., `(homepage)`)
- **Regular Routes**: kebab-case (e.g., `book-a-demo`)
- **Component Folders**: camelCase (e.g., `components/common`)

## Best Practices

1. **Keep Routes Self-Contained**: Each route group should be independently deployable
2. **Share Wisely**: Only move components to `app/components/` if truly shared
3. **Colocate**: Keep related files close (components, actions, utilities)
4. **Type Safety**: Use TypeScript for all new files
5. **Consistency**: Follow the established patterns

## Adding New Features

### New Route
1. Create route folder: `app/new-feature/`
2. Add `layout.tsx` (if needed)
3. Add `page.tsx`
4. Create `components/` folder for route-specific components
5. Create `actions/` folder for server actions

### New Shared Component
1. Determine type: `common`, `ui`, `shadcn`, or `theme`
2. Create in appropriate `app/components/` subfolder
3. Export from component file
4. Import where needed

### New Utility
1. Add to `app/lib/` folder
2. Export function
3. Import using `../../lib/filename`

## Migration Notes

This structure was migrated from a flat structure to follow Domain-Driven Design principles. Key changes:
- Navbar, Footer, LoadingScreen moved to `app/components/common/`
- Homepage components remain in `app/(homepage)/components/`
- Created utility folder `app/lib/` for helper functions
- All layouts updated to use new import paths

