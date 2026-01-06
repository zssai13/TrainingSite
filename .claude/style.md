# HYROS Training Site - Design System

A minimal, professional design system inspired by Anthropic Academy. Optimized for readability and LLM consumption.

---

## Typography

### Font Families

```css
--font-heading: "Libre Baskerville", Georgia, "Times New Roman", serif;
--font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
```

| Element | Font | Usage |
|---------|------|-------|
| Hero/Page Titles | `font-heading` | Large display text |
| Body/UI | `font-body` | All other text |
| Code | `font-mono` | Code blocks, inline code |

### Font Sizes

| Element | Size | Tailwind |
|---------|------|----------|
| Hero title | 48-60px | `text-5xl lg:text-6xl` |
| Page title | 36-48px | `text-4xl lg:text-5xl` |
| Section heading (h2) | 24px | `text-2xl font-semibold` |
| Subsection (h3) | 20px | `text-xl font-medium` |
| Card title | 16px | `text-base font-medium` |
| Body text | 15px | `text-[15px]` or `text-base` |
| Small/meta | 13px | `text-[13px]` |
| Tiny (badges) | 12px | `text-xs` |

### Line Heights

| Context | Value | Tailwind |
|---------|-------|----------|
| Headings | 1.2 | `leading-tight` |
| Body text | 1.6-1.7 | `leading-relaxed` |
| Compact UI | 1.4 | `leading-snug` |

---

## Color Palette

### Light Mode (Default)

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--background` | 0 0% 100% | #FFFFFF | Page background |
| `--surface` | 35 20% 96% | #F8F6F3 | Featured sections (warm cream) |
| `--foreground` | 0 0% 9% | #171717 | Primary text |
| `--muted` | 0 0% 45% | #737373 | Secondary text |
| `--muted-foreground` | 0 0% 45% | #737373 | Descriptions |
| `--border` | 0 0% 91% | #E8E8E8 | Borders, dividers |
| `--accent` | 30 10% 83% | #D4D0C8 | Card backgrounds |
| `--accent-foreground` | 0 0% 9% | #171717 | Text on accent |

### Dark Mode

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| `--background` | 0 0% 4% | #0A0A0A | Page background |
| `--surface` | 0 0% 9% | #171717 | Elevated surfaces |
| `--foreground` | 0 0% 98% | #FAFAFA | Primary text |
| `--muted` | 0 0% 64% | #A3A3A3 | Secondary text |
| `--border` | 0 0% 18% | #2E2E2E | Borders |
| `--accent` | 0 0% 15% | #262626 | Card backgrounds |

### Semantic Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--primary` | 0 0% 9% | 0 0% 98% | Primary buttons/CTAs |
| `--primary-foreground` | 0 0% 100% | 0 0% 9% | Text on primary |
| `--link` | 200 90% 40% | 200 85% 55% | Link text |
| `--success` | 142 76% 36% | 142 69% 58% | Success states |
| `--warning` | 38 92% 50% | 38 92% 50% | Warning states |
| `--error` | 0 84% 60% | 0 84% 60% | Error states |

---

## Spacing

### Scale

| Token | Pixels | Tailwind | Usage |
|-------|--------|----------|-------|
| `--space-1` | 4px | `p-1` | Minimal gaps |
| `--space-2` | 8px | `p-2` | Tight spacing |
| `--space-3` | 12px | `p-3` | Small sections |
| `--space-4` | 16px | `p-4` | Standard padding |
| `--space-5` | 20px | `p-5` | Card padding |
| `--space-6` | 24px | `p-6` | Large padding |
| `--space-8` | 32px | `p-8` | Section margins |
| `--space-10` | 40px | `p-10` | Hero spacing |
| `--space-12` | 48px | `p-12` | Major sections |
| `--space-16` | 64px | `p-16` | Page sections |

### Container Widths

| Element | Max Width | Tailwind |
|---------|-----------|----------|
| Page content | 1200px | `max-w-[1200px]` |
| Article content | 800px | `max-w-[800px]` |
| Narrow content | 640px | `max-w-2xl` |
| Navigation | 1400px | `max-w-[1400px]` |

---

## Border Radius

| Size | Pixels | Tailwind | Usage |
|------|--------|----------|-------|
| Small | 4px | `rounded-sm` | Tags, badges |
| Default | 8px | `rounded-lg` | Cards, inputs |
| Large | 12px | `rounded-xl` | Feature cards |
| Full | 9999px | `rounded-full` | Pills, avatars |

---

## Components

### Navigation

```tsx
// Top navigation bar
<nav className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
  <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
    {/* Logo, links, CTA */}
  </div>
</nav>
```

### Hero Section

```tsx
// Anthropic Academy style hero
<section className="px-6 py-16 text-center lg:py-24">
  <h1 className="font-heading text-5xl lg:text-6xl">
    HYROS Academy
  </h1>
  <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
    Master ad attribution with comprehensive training...
  </p>
</section>
```

### Featured Section

```tsx
// Warm cream background section
<section className="rounded-3xl bg-surface px-8 py-12 lg:px-12 lg:py-16">
  <h2 className="text-2xl font-semibold">Featured courses</h2>
  {/* Course cards */}
</section>
```

### Course Card

```tsx
// Clean course card with hover
<a
  href="/course"
  className="group flex flex-col rounded-xl bg-accent p-6 transition-colors hover:bg-accent/80"
>
  <span className="text-[13px] text-muted">Featured Course</span>
  <h3 className="mt-2 text-lg font-medium">Course Title</h3>
  <ArrowRight className="mt-auto h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
</a>
```

### Category Card

```tsx
// Category navigation card
<a
  href="/category"
  className="group block rounded-xl border border-border p-6 transition-colors hover:border-foreground/20"
>
  <h3 className="font-medium">E-commerce Training</h3>
  <p className="mt-2 text-[13px] text-muted">
    Optimize your DTC ad spend...
  </p>
  <span className="mt-4 inline-flex items-center text-[13px] font-medium">
    Start learning
    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
</a>
```

### Lesson Card

```tsx
// Video lesson card
<a href="/lesson" className="group block">
  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
    <img src="thumbnail.jpg" alt="" className="object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <Play className="h-12 w-12 text-white" />
    </div>
  </div>
  <h3 className="mt-3 font-medium group-hover:underline">Lesson Title</h3>
  <p className="mt-1 text-[13px] text-muted">5 min</p>
</a>
```

### Buttons

```tsx
// Primary button (dark)
<button className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
  Try Claude
</button>

// Secondary/outline button
<button className="inline-flex h-10 items-center rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-accent">
  See all courses
</button>
```

---

## Layout Patterns

### Page Layout

```tsx
<div className="min-h-screen bg-background">
  <Navigation />
  <main className="mx-auto max-w-[1200px] px-6 py-12">
    {children}
  </main>
  <Footer />
</div>
```

### Content + Sidebar

```tsx
<div className="flex gap-10">
  <article className="min-w-0 flex-1 max-w-[800px]">
    {/* Main content */}
  </article>
  <aside className="hidden w-64 shrink-0 lg:block">
    {/* Table of contents */}
  </aside>
</div>
```

### Grid Layouts

```tsx
// 2-column card grid
<div className="grid gap-4 sm:grid-cols-2">

// 3-column card grid
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

// Featured + cards layout
<div className="grid gap-6 lg:grid-cols-[1fr_300px_300px]">
```

---

## Transitions

```tsx
// Color transitions (most common)
className="transition-colors"

// Transform transitions
className="transition-transform"

// All properties
className="transition-all duration-200"

// Hover reveal
className="opacity-0 transition-opacity group-hover:opacity-100"

// Arrow slide
className="transition-transform group-hover:translate-x-1"
```

---

## Accessibility

### Focus States

```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### Screen Reader

```tsx
// Visually hidden
className="sr-only"

// Skip link
<a href="#main" className="sr-only focus:not-sr-only focus:absolute ...">
  Skip to main content
</a>
```

### ARIA

- Use `aria-label` for icon-only buttons
- Use `aria-current="page"` for current nav item
- Use `aria-expanded` for collapsible sections
- Include `role="navigation"`, `role="main"`, etc.

---

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base | 0 | Default content |
| Dropdown | 10 | Menus, tooltips |
| Sticky | 40 | Header, sidebar |
| Modal | 50 | Modals, dialogs |
| Toast | 60 | Notifications |

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | 2-column grids |
| `md` | 768px | Tablet adjustments |
| `lg` | 1024px | Desktop layout, show sidebars |
| `xl` | 1280px | Wide content |

### Patterns

```tsx
// Mobile-first show/hide
className="hidden lg:block"

// Responsive text
className="text-4xl lg:text-5xl"

// Responsive padding
className="px-4 lg:px-6"

// Responsive grid
className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
```

---

## Best Practices

1. **Use semantic tokens** - `text-foreground` not `text-black`
2. **Mobile-first** - Start with mobile, add breakpoint overrides
3. **Transition interactive elements** - Always add `transition-colors`
4. **Dark mode aware** - Test both color schemes
5. **Maintain heading hierarchy** - h1 > h2 > h3, never skip
6. **Keep content extractable** - Clean text, semantic HTML
