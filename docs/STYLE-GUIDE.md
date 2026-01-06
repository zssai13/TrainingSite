# HYROS Academy - Style Guide

**Created:** January 6, 2026
**Status:** Approved Design - Ready for Implementation

---

## Design Philosophy

A clean, minimalist design inspired by Anthropic's elegant aesthetic, featuring:
- **Heavy serif headlines** for authority and sophistication
- **White/cream backgrounds** with hard black text
- **Generous whitespace** for breathing room
- **Bold black UI elements** (borders, buttons)
- **No greys or oranges** - pure black/white with subtle cream accents

---

## Typography

### Font Families

```css
/* Headlines - Heavy Serif */
font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;

/* Body Text - Clean Sans */
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,700;0,8..60,900;1,8..60,400;1,8..60,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap" rel="stylesheet" />
```

### Type Scale

| Element | Font | Weight | Size | Tailwind |
|---------|------|--------|------|----------|
| Hero Title | Source Serif 4 | 900 (Black) | clamp(2.75rem, 6vw, 5rem) | `font-display font-black text-[clamp(2.75rem,6vw,5rem)]` |
| Section Heading (h2) | Source Serif 4 | 900 (Black) | clamp(1.75rem, 4vw, 3rem) | `font-display font-black text-[clamp(1.75rem,4vw,3rem)]` |
| Stats Numbers | Source Serif 4 | 900 (Black) | 2.25-2.5rem | `font-display font-black text-3xl lg:text-4xl` |
| Card Title (h3) | DM Sans | 500 | 1.25rem | `text-xl font-medium` |
| Body Text | DM Sans | 400 | 1rem-1.125rem | `text-base` or `text-lg` |
| Small/Meta | DM Sans | 400 | 0.8125rem | `text-[13px]` |
| Eyebrow/Label | DM Sans | 400 | 0.8125rem | `text-[13px] uppercase tracking-[0.2em]` |

### Line Heights

| Context | Value | Tailwind |
|---------|-------|----------|
| Headlines | 1.1 | `leading-[1.1]` or `leading-tight` |
| Body text | 1.6 | `leading-relaxed` |
| Compact UI | 1.4 | `leading-snug` |

---

## Color Palette

### Primary Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Black | `#000000` | 0 0% 0% | Headlines, primary text, buttons, borders |
| White | `#FFFFFF` | 0 0% 100% | Page background |
| Cream | `#FAF9F7` | 40 20% 97% | Stats bar, accent sections |

### Text Colors

| Name | Value | Usage |
|------|-------|-------|
| Primary Text | `text-black` | Headlines, important text |
| Secondary Headline | `text-black/70` | Second line of hero, emphasis variation |
| Body Text | `text-black/60` | Paragraphs, descriptions |
| Muted Text | `text-black/50` | Meta info, labels |
| Subtle Text | `text-black/40` | Eyebrows, tertiary info |

### Dark Section Colors (How It Works)

| Name | Value | Usage |
|------|-------|-------|
| Background | `bg-black` | Section background |
| Primary Text | `text-white` | Headlines, important text |
| Secondary Headline | `text-white/60` | Second line emphasis |
| Body Text | `text-white/60` | Paragraphs |
| Muted Text | `text-white/50` | Descriptions |
| Step Numbers | `text-white/30` | Large decorative numbers |
| Borders | `border-white/10` | Card borders |
| Border Hover | `border-white/20` | Hover state |

---

## Spacing

### Container

```css
max-width: 1400px;
padding-x: 1.5rem (mobile) / 3rem (desktop);
```

Tailwind: `max-w-[1400px] mx-auto px-6 lg:px-12`

### Section Spacing

| Section | Padding | Tailwind |
|---------|---------|----------|
| Hero | py-32 to py-44 | `pt-32 pb-20 lg:pt-44 lg:pb-32` |
| Standard Section | py-24 to py-32 | `py-24 lg:py-32` |
| Stats Bar | py-8 to py-10 | `py-8 lg:py-10` |

### Component Spacing

| Element | Margin/Gap | Tailwind |
|---------|------------|----------|
| Heading to paragraph | mb-4 to mb-6 | `mb-4` or `mb-6` |
| Paragraph to CTA | mb-10 to mb-12 | `mb-10` or `mb-12` |
| Card grid gap | gap-4 | `gap-4` |
| Section intro to content | mb-16 | `mb-16` |

---

## Components

### Navigation

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <span className="text-xl font-medium tracking-tight text-black">HYROS</span>
        <span className="text-[13px] text-black/40 font-light">Academy</span>
      </a>
      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-[13px] text-black/60 hover:text-black transition-colors">Link</a>
        <a href="#" className="text-[13px] bg-black text-white px-4 py-2 hover:bg-black/80 transition-colors">
          CTA Button
        </a>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section

```tsx
<section className="pt-32 pb-20 lg:pt-44 lg:pb-32">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="max-w-3xl">
      <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-6">
        Eyebrow Text
      </p>
      <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-black leading-[1.1] text-black mb-8">
        Primary headline
        <br />
        <span className="text-black/70">secondary line</span>
      </h1>
      <p className="text-lg text-black/60 leading-relaxed max-w-xl mb-12">
        Description paragraph text goes here.
      </p>
      <div className="flex items-center gap-6">
        {/* Primary CTA */}
        <a className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all">
          Button Text
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        {/* Secondary CTA */}
        <a className="group inline-flex items-center gap-2 text-[15px] text-black/60 hover:text-black transition-colors">
          <span className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
            <Play className="w-3.5 h-3.5 ml-0.5" />
          </span>
          Watch intro
        </a>
      </div>
    </div>
  </div>
</section>
```

### Stats Bar

```tsx
<section className="border-y border-black/10 bg-[#FAF9F7]">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/10">
      {stats.map((stat) => (
        <div className="py-8 lg:py-10 px-6 first:pl-0 last:pr-0">
          <p className="font-display text-3xl lg:text-4xl font-black text-black mb-1">{stat.value}</p>
          <p className="text-[13px] text-black/50">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Section Header

```tsx
<div className="max-w-xl mb-16">
  <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">
    Eyebrow Text
  </p>
  <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-4">
    Section headline
  </h2>
  <p className="text-black/60 leading-relaxed">
    Section description text.
  </p>
</div>
```

### Business Model Card (with hover invert)

```tsx
<a
  href="/path/"
  className="group relative bg-white border-2 border-black p-8 hover:bg-black transition-all duration-300"
>
  <div className="flex items-start justify-between mb-12">
    <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
    <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-white transition-all transform group-hover:translate-x-1" />
  </div>
  <h3 className="text-xl font-medium text-black group-hover:text-white mb-3 transition-colors">
    Card Title
  </h3>
  <p className="text-[15px] text-black/60 group-hover:text-white/70 leading-relaxed transition-colors">
    Card description text.
  </p>
</a>
```

### Coming Soon Card (muted)

```tsx
<a className="group relative bg-[#FAF9F7] border-2 border-transparent p-8 hover:border-black transition-all duration-300">
  <div className="flex items-start justify-between mb-12">
    <span className="text-[11px] uppercase tracking-[0.15em] text-black/40 font-medium">
      Coming Soon
    </span>
  </div>
  <h3 className="text-xl font-medium text-black/40 mb-3">Card Title</h3>
  <p className="text-[15px] text-black/40 leading-relaxed">Description.</p>
</a>
```

### Dark Section (How It Works)

```tsx
<section className="py-24 lg:py-32 bg-black text-white">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left: Header */}
      <div>
        <p className="text-[13px] uppercase tracking-[0.2em] text-white/40 mb-4">Eyebrow</p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black leading-tight mb-6">
          Headline,
          <br />
          <span className="text-white/60">second line</span>
        </h2>
        <p className="text-white/60 leading-relaxed mb-8 max-w-md">Description text.</p>
        <a className="inline-flex items-center gap-2 text-[15px] text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
          Link text
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      {/* Right: Steps */}
      <div className="space-y-6">
        {steps.map((step) => (
          <div className="flex gap-6 p-6 border border-white/10 hover:border-white/20 transition-colors">
            <span className="font-display text-2xl font-black text-white/30">{step.num}</span>
            <div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

### CTA Section (Centered)

```tsx
<section className="py-24 lg:py-32">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight mb-6">
        CTA Headline?
      </h2>
      <p className="text-black/60 leading-relaxed mb-10">
        Supporting description text.
      </p>
      <a className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[15px] font-medium hover:bg-black/80 transition-all">
        Button text
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
</section>
```

### Footer (Simple)

Used on all pages for consistency.

```tsx
<footer className="border-t border-black/10 py-12">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium tracking-tight text-black">HYROS</span>
        <span className="text-[13px] text-black/40 font-light">Academy</span>
      </div>
      <div className="flex items-center gap-8 text-[13px] text-black/50">
        <a href="https://docs.hyros.com" className="hover:text-black transition-colors">Documentation</a>
        <a href="https://app.hyros.com" className="hover:text-black transition-colors">Dashboard</a>
        <a href="https://hyros.com" className="hover:text-black transition-colors">HYROS.com</a>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-black/5 text-[12px] text-black/40">
      © 2025 HYROS Inc. All rights reserved.
    </div>
  </div>
</footer>
```

---

## Training Page Template (Category Pages)

Use this template for all training category pages (`/ecom-growth-training/`, `/call-based/`, etc.)

### Page Structure

```
1. Navigation (fixed)
2. Welcome Video Section (with breadcrumb)
3. Lessons Accordion Section (cream background)
4. CTA Section
5. Footer (4-column)
```

### Lesson Data Structure

```typescript
interface Lesson {
  id: number
  number: string        // '01', '02', etc.
  title: string
  duration: string      // '4 min', '5 min', etc.
  videoId: string       // Wistia video ID (e.g., '6uyc4d8dfe')
  problem: string[]     // Array of problem points
  solution: string      // How HYROS solves it
  docsUrl: string       // Link to documentation
  docsLabel: string     // Label for docs link
}

// Example:
const lessons: Lesson[] = [
  {
    id: 1,
    number: '01',
    title: 'Using Correct Data To Scale Ads',
    duration: '4 min',
    videoId: '6uyc4d8dfe',
    problem: [
      'Mis-attribution of sales across multiple traffic sources',
      'Ad platforms miss 15-20%+ of conversions due to tracking limitations',
      'Making scaling decisions based on incomplete data',
    ],
    solution: 'HYROS provides accurate attribution and eliminates tracking gaps...',
    docsUrl: 'https://docs.hyros.com/category/initial/',
    docsLabel: 'Initial Setup Guide',
  },
  // ... more lessons
]
```

### Wistia Video Embed

Use responsive iframes for Wistia videos:

```tsx
{/* Wistia Video Embed - Responsive */}
<div className="aspect-video bg-black rounded overflow-hidden">
  <iframe
    src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true`}
    title={title}
    allow="autoplay; fullscreen"
    frameBorder="0"
    className="w-full h-full"
  />
</div>
```

**Finding Wistia Video IDs:**
Use browser dev tools to find IDs on the source page:
```javascript
// Run in console on the source page
document.querySelectorAll('[class*="wistia_async_"]')
  .forEach(el => {
    const match = el.className.match(/wistia_async_([a-zA-Z0-9]+)/);
    if (match) console.log(match[1]);
  });
```

### Welcome Video Section

```tsx
<section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    {/* Breadcrumb */}
    <a href="/" className="inline-flex items-center gap-2 text-[13px] text-black/40 hover:text-black/60 transition-colors mb-12">
      <ArrowLeft className="w-4 h-4" />
      Back to all courses
    </a>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Video - Wistia Embed */}
      <div className="aspect-video bg-black overflow-hidden order-2 lg:order-1">
        <iframe
          src="https://fast.wistia.net/embed/iframe/WELCOME_VIDEO_ID?seo=true&videoFoam=true"
          title="Welcome to [Category] Training"
          allow="autoplay; fullscreen"
          frameBorder="0"
          className="w-full h-full"
        />
      </div>

      {/* Text */}
      <div className="order-1 lg:order-2">
        <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">Start Here</p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black text-black leading-tight mb-6">
          Welcome to [Category] Training
        </h2>
        <p className="text-black/60 leading-relaxed mb-6">
          Before diving into the lessons, watch this quick introduction...
        </p>
        <p className="text-black/60 leading-relaxed">
          Each lesson is designed to be completed in under 5 minutes...
        </p>
      </div>
    </div>
  </div>
</section>
```

### Lesson Accordion Component

```tsx
function LessonAccordion({
  lesson,
  isOpen,
  onToggle,
}: {
  lesson: Lesson
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b-2 border-black/5 last:border-b-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-6 lg:py-8 text-left group"
      >
        <span className="font-display text-4xl lg:text-5xl font-black text-black/10 group-hover:text-black/20 transition-colors w-20 shrink-0">
          {lesson.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black group-hover:text-black/70 transition-colors leading-tight">
            {lesson.title}
          </h3>
          <p className="text-[13px] text-black/40 mt-1">{lesson.duration}</p>
        </div>
        <div className={`w-10 h-10 border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black border-black' : 'group-hover:border-black/30'}`}>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-black/40'}`} />
        </div>
      </button>

      {/* Accordion Content - Animated */}
      <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 lg:px-8 lg:pl-36 pb-10 pt-2">
            {/* Video Player - Constrained width */}
            <div className="max-w-2xl mb-8">
              <div className="aspect-video bg-black rounded overflow-hidden">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${lesson.videoId}?seo=true&videoFoam=true`}
                  title={lesson.title}
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Content - Constrained width */}
            <div className="max-w-3xl space-y-8">
              {/* What This Solves */}
              <div>
                <h4 className="text-[13px] uppercase tracking-[0.15em] text-black/40 font-medium mb-4">
                  What This Solves
                </h4>
                <ul className="space-y-2">
                  {lesson.problem.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-black/60 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-black/40 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How HYROS Helps */}
              <div>
                <h4 className="text-[13px] uppercase tracking-[0.15em] text-black/40 font-medium mb-4">
                  How HYROS Helps
                </h4>
                <p className="text-[15px] text-black/60 leading-relaxed">{lesson.solution}</p>
              </div>

              {/* Documentation Link */}
              <a
                href={lesson.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-black hover:text-black/70 transition-colors"
              >
                <span className="border-b border-black/30 hover:border-black pb-0.5">
                  {lesson.docsLabel}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Lessons Section Container

```tsx
<section className="py-20 lg:py-28 bg-[#FAF9F7]">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
    {/* Section Header */}
    <div className="max-w-xl mb-16">
      <p className="text-[13px] uppercase tracking-[0.2em] text-black/40 mb-4">Course Content</p>
      <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-black text-black leading-tight">
        X lessons to [benefit statement]
      </h2>
    </div>

    {/* Accordion */}
    <div className="bg-white border-2 border-black/10">
      {lessons.map((lesson) => (
        <LessonAccordion
          key={lesson.id}
          lesson={lesson}
          isOpen={openLesson === lesson.id}
          onToggle={() => setOpenLesson(openLesson === lesson.id ? null : lesson.id)}
        />
      ))}
    </div>
  </div>
</section>
```

### Training Page State

```tsx
export default function TrainingPage() {
  const [openLesson, setOpenLesson] = useState<number | null>(1) // First lesson open by default
  // ...
}
```

---

## Buttons

### Primary Button (Black)

```tsx
<a className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80 transition-all">
  Button Text
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</a>
```

### Secondary Button (Outline)

```tsx
<button className="inline-flex items-center gap-2 text-[15px] text-black/60 hover:text-black transition-colors">
  <span className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-black/40 transition-colors">
    <Icon className="w-3.5 h-3.5" />
  </span>
  Button Text
</button>
```

### Text Link with Arrow

```tsx
<a className="inline-flex items-center gap-2 text-[15px] text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
  Link text
  <ArrowRight className="w-4 h-4" />
</a>
```

---

## Icons

Using **Lucide React** with:
- `strokeWidth={1.5}` for card icons
- Default stroke width for UI icons
- Sizes: `w-4 h-4` (small), `w-5 h-5` (medium), `w-6 h-6` (large)

---

## Transitions

```css
/* Standard transition */
transition-colors

/* All properties */
transition-all duration-300

/* Arrow slide on hover */
transition-transform group-hover:translate-x-1
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | 2-column grids |
| `md` | 768px | Show desktop nav |
| `lg` | 1024px | 3-column grids, larger spacing |

---

## CSS Variables (globals.css)

```css
.font-display {
  font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  font-optical-sizing: auto;
}

body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  color: #000000;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background-color: #000000;
  color: #ffffff;
}
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── agency/page.tsx
│   ├── ecom-growth-training/page.tsx
│   ├── call-based/page.tsx
│   ├── saas-software/page.tsx
│   └── general-lessons/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── content/
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── SectionHeader.tsx
│       ├── BusinessModelCard.tsx
│       └── LessonAccordion.tsx
└── styles/
    └── globals.css
```

---

## Quick Reference

### Eyebrow Text
`text-[13px] uppercase tracking-[0.2em] text-black/40`

### Heavy Headline
`font-display font-black text-[clamp(1.75rem,4vw,3rem)] leading-tight`

### Body Text
`text-black/60 leading-relaxed`

### Black Button
`bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80`

### Card with Border
`border-2 border-black p-8`

### Section Spacing
`py-24 lg:py-32`

### Container
`max-w-[1400px] mx-auto px-6 lg:px-12`

---

*This style guide captures the approved HYROS Academy design. Apply consistently across all pages.*
