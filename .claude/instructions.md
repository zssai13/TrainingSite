# HYROS Training Site - AI Assistant Instructions

## Project Context

This is a Next.js 15 training platform for HYROS ad attribution software. The site prioritizes:

1. **LLM Readability** - All content must be easily parseable by language models
2. **Clean Design** - Anthropic Academy-inspired minimal aesthetic
3. **Accessibility** - WCAG 2.1 AA compliance required
4. **Performance** - Target 90+ Lighthouse scores

## Architecture Overview

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # shadcn/ui base components
│   ├── layout/         # Header, Footer, Sidebar, Navigation
│   └── content/        # Course cards, lesson viewers, etc.
├── content/            # MDX content organized by category
├── lib/                # Utilities and helpers
└── styles/             # Global CSS and Tailwind config
```

## Design System

Reference `.claude/style.md` for complete design tokens. Key points:

- **Headings**: Libre Baskerville (serif)
- **Body**: System font stack (sans-serif)
- **Colors**: HSL-based semantic tokens with light/dark mode
- **Spacing**: 4px base unit system

## Content Categories

| Path | Category |
|------|----------|
| `/agency/` | Agency training |
| `/ecommerce/` | E-commerce training |
| `/calls/` | Call-based business |
| `/saas/` | SaaS training |
| `/info-education/` | Info/Education marketing |
| `/advanced/` | Advanced features |

## Code Standards

### TypeScript
- Strict mode enabled
- Explicit return types on exported functions
- Interface over type where possible

### Components
- Use Server Components by default
- Add `'use client'` only when needed
- Props interfaces named `{Component}Props`

### Styling
- Tailwind classes preferred
- Use `cn()` utility for conditional classes
- Follow mobile-first responsive approach

### Content
- MDX for all lesson content
- Frontmatter for metadata
- Semantic HTML structure

## LLM Optimization

When creating content or components:

1. Use semantic HTML elements (`<article>`, `<nav>`, `<main>`, `<section>`)
2. Include proper heading hierarchy (h1 > h2 > h3, no skipping)
3. Add descriptive `aria-label` where needed
4. Structure content for easy extraction
5. Include JSON-LD structured data for lessons

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

## Key Files

| File | Purpose |
|------|---------|
| `docs/PRD.md` | Product requirements |
| `.claude/style.md` | Design system reference |
| `public/llms.txt` | LLM instruction file |
| `src/content/` | All MDX lesson content |

## When Making Changes

1. Check `style.md` for design tokens before styling
2. Maintain LLM-friendly structure (semantic HTML, clean text)
3. Test both light and dark modes
4. Verify accessibility with screen reader
5. Keep components small and focused
