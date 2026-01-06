# Architecture Overview

**Last Updated:** January 6, 2026
**Status:** All Pages Complete

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Runtime | React | 19.x |
| Icons | Lucide React | 0.468.x |
| Fonts | Google Fonts (Source Serif 4, DM Sans) | - |
| Videos | Wistia (iframe embeds) | - |

## Directory Structure

```
TrainingSite/
├── CLAUDE.md                    # AI assistant instructions
├── HANDOFF.md                   # Project status & handoff guide
│
├── docs/
│   ├── ARCHITECTURE.md          # This file
│   ├── STYLE-GUIDE.md          # Complete design system
│   ├── CONTENT-IMPORT.md       # Guide for importing training content
│   ├── PRD.md                  # Product requirements
│   └── IMPORT-PLAN.md          # URL mapping
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── page.tsx            # Homepage ✅
│   │   │
│   │   ├── ecom-growth-training/
│   │   │   └── page.tsx        # E-commerce training ✅
│   │   │
│   │   ├── call-based/
│   │   │   └── page.tsx        # Call-based training ✅
│   │   │
│   │   ├── saas-software/
│   │   │   └── page.tsx        # SaaS training ✅
│   │   │
│   │   ├── general-lessons/
│   │   │   └── page.tsx        # Info & Education training ✅
│   │   │
│   │   └── agency/
│   │       └── page.tsx        # Agency training ✅
│   │
│   └── styles/
│       └── globals.css          # Global styles, font definitions
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── tailwind.config.ts
```

## Page Architecture

### Homepage (`/`)
- **File:** `src/app/page.tsx`
- **Status:** Complete
- **Sections:**
  1. Fixed Navigation (backdrop blur)
  2. Hero with heavy serif headline + single CTA
  3. Stats Bar (cream background)
  4. Business Model Cards Grid (5 active + 1 coming soon)
  5. "How It Works" Dark Section (3 steps)
  6. CTA Section
  7. Simple Footer

### Training Pages
All training pages share the same structure:

- **Files:**
  - `src/app/ecom-growth-training/page.tsx` (5 lessons)
  - `src/app/saas-software/page.tsx` (3 lessons)
  - `src/app/call-based/page.tsx` (5 lessons)
  - `src/app/general-lessons/page.tsx` (5 lessons)
  - `src/app/agency/page.tsx` (5 lessons)

- **Sections:**
  1. Fixed Navigation
  2. Breadcrumb + Welcome Video (2-column, Wistia embed)
  3. Lessons Accordion Section (cream background)
  4. CTA Section
  5. Simple Footer (matches homepage)

## Component Patterns

### Client Components ('use client')
Training pages use client components for accordion state:

```typescript
const [openLesson, setOpenLesson] = useState<number | null>(1)
```

### LessonAccordion Component
Each training page contains an inline `LessonAccordion` component with:
- Animated expand/collapse (CSS grid-rows trick)
- Large lesson number (01, 02, etc.)
- Wistia video iframe
- "What This Solves" bullet points
- "How HYROS Helps" solution text
- Documentation link

### Lesson Data Structure

```typescript
interface Lesson {
  id: number
  number: string        // "01", "02", etc.
  title: string
  duration: string      // "4 min", "5 min"
  videoId: string       // Wistia video ID (e.g., "6uyc4d8dfe")
  problem: string[]     // Array of problem points
  solution: string      // Solution paragraph
  docsUrl: string       // Link to docs.hyros.com
  docsLabel: string     // Label for docs link
}
```

## Video Integration

All videos use Wistia iframe embeds:

```tsx
<iframe
  src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true`}
  title={title}
  allow="autoplay; fullscreen"
  frameBorder="0"
  className="w-full h-full"
/>
```

### Video IDs by Page

| Page | Welcome | Lesson Videos |
|------|---------|---------------|
| E-commerce | `drhan93ocz` | `6uyc4d8dfe`, `gmb2ag9wbi`, `55c0ekbal0`, `mvdr7crkqa`, `opw9v390lw` |
| SaaS | `drhan93ocz` | `ztmsuoaq65`, `3r4573u3jx`, `klubtfop2p` |
| Call-Based | `drhan93ocz` | `6uyc4d8dfe`, `kht91wxugs`, `55c0ekbal0`, `mvdr7crkqa`, `opw9v390lw` |
| General Lessons | `drhan93ocz` | `6uyc4d8dfe`, `kht91wxugs`, `55c0ekbal0`, `mvdr7crkqa`, `opw9v390lw` |
| Agency | `drhan93ocz` | `6uyc4d8dfe`, `kht91wxugs`, `55c0ekbal0`, `mvdr7crkqa`, `opw9v390lw` |

## URL Structure

| URL | Page | Status |
|-----|------|--------|
| `/` | Homepage | ✅ Complete |
| `/ecom-growth-training/` | E-commerce Training | ✅ Complete |
| `/call-based/` | Call-Based Training | ✅ Complete |
| `/saas-software/` | SaaS Training | ✅ Complete |
| `/general-lessons/` | Info & Education | ✅ Complete |
| `/agency/` | Agency Training | ✅ Complete |

## Styling Architecture

### Tailwind Configuration
- Custom font class: `font-display` (Source Serif 4)
- Cream accent: `#FAF9F7` (used inline)

### Key CSS Classes

```css
/* globals.css */
.font-display {
  font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  font-optical-sizing: auto;
}
```

### Design Tokens

| Token | Value |
|-------|-------|
| Container | `max-w-[1400px] mx-auto px-6 lg:px-12` |
| Section Spacing | `py-24 lg:py-32` |
| Cream Background | `bg-[#FAF9F7]` |
| Heavy Headline | `font-display font-black text-[clamp(...)]` |
| Eyebrow | `text-[13px] uppercase tracking-[0.2em] text-black/40` |

## Performance

- Minimal JavaScript (accordion state only)
- Videos loaded via Wistia CDN (fast.wistia.net)
- Fonts loaded via Google Fonts
- Static site generation (SSG) for all pages

## Deployment

Recommended: Vercel (optimized for Next.js)

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start
```

## Future Considerations

1. **Component Extraction:** Move Header/Footer to shared components
2. **Agency Videos:** Replace shared videos with dedicated agency content
3. **Search:** Add client-side search across lessons
4. **Mobile Menu:** Add hamburger menu for mobile navigation
