# HYROS Training Site - Import & Redesign Plan

**Created:** January 6, 2026
**Status:** Planning Phase

---

## Executive Summary

This plan outlines the migration of training.hyros.com to a modern Next.js platform with a clean, minimalist design inspired by Anthropic's aesthetic but using HYROS brand colors and style. The primary goals are:

1. **Maintain URL Structure** - All existing links continue working after migration
2. **Elevate Design** - Clean, elegant, minimalist interface (not grey/orange)
3. **HYROS Brand Identity** - Dark theme with blue/teal accents matching hyros.com
4. **LLM Optimization** - Semantic HTML, structured data, easy content extraction

---

## Part 1: URL Structure Mapping

### Current Site URLs (training.hyros.com)

| Current URL | Page Title | Status |
|-------------|------------|--------|
| `/` | Homepage | Active |
| `/ecom-growth-training/` | E-commerce Training | Active |
| `/call-based/` | Call-Based Business | Active |
| `/saas-software/` | SaaS Software | Active |
| `/general-lessons/` | Info/Education Marketing | Active |
| `/agency/` | Agency Training | Not Active (placeholder) |

### New URL Structure (Maintaining Compatibility)

```
/                           # Homepage
/ecom-growth-training/      # E-commerce (KEEP for backwards compatibility)
/call-based/                # Call-based business (KEEP)
/saas-software/             # SaaS training (KEEP)
/general-lessons/           # Info/Education (KEEP)
/agency/                    # Agency (NEW - to be created)
```

### URL Redirect Strategy

No redirects needed if we maintain exact URL paths. The Next.js App Router will handle these as:

```
src/app/
├── page.tsx                      # /
├── ecom-growth-training/
│   └── page.tsx                  # /ecom-growth-training/
├── call-based/
│   └── page.tsx                  # /call-based/
├── saas-software/
│   └── page.tsx                  # /saas-software/
├── general-lessons/
│   └── page.tsx                  # /general-lessons/
└── agency/
    └── page.tsx                  # /agency/
```

---

## Part 2: Content Structure

### Current Content Pattern (Per Category Page)

Each category page follows this structure:
1. **Welcome Video** - Wistia embed at top
2. **Introduction Text** - Brief category description
3. **Accordion Lessons** - 5 expandable lessons per category

### Lesson Content Pattern

Each lesson contains:
1. **Video** - Wistia embed
2. **Problem Statement** - "What This Video Solves"
3. **Solution** - "How HYROS Solves This"
4. **Documentation Links** - Links to docs.hyros.com

### Content Migration Approach

**Phase 1: Structure First**
- Create page shells with placeholder content
- Establish component patterns
- Validate URL structure

**Phase 2: Content Population**
- Extract video embed codes
- Migrate lesson text content
- Add documentation links

---

## Part 3: Design Direction

### Brand Analysis: HYROS (hyros.com)

**Colors Observed:**
- Background: Near black (#0A0A0A to #000000)
- Text: Pure white (#FFFFFF)
- Accent Links: Teal/blue (#00D4FF or similar)
- Cards: Dark grey with subtle borders (#1A1A1A)
- Gradients: Subtle blue/purple on hero elements

**Typography:**
- Clean sans-serif (system fonts)
- Bold headlines
- Good contrast ratios

**Design Characteristics:**
- Dark mode first
- Generous whitespace
- Card-based layouts
- Subtle animations
- Premium, modern feel

### Design Principles for Training Site

1. **Dark Theme Primary** - Match hyros.com aesthetic
2. **Light Theme Option** - For accessibility/preference
3. **Minimalist Cards** - Clean, uncluttered lesson cards
4. **Clear Hierarchy** - Obvious navigation path
5. **Video-First** - Prominent video placement
6. **No Visual Clutter** - Remove unnecessary decorations

### Color Palette (Updated for HYROS Brand)

```css
/* Dark Mode (Default) */
--background: #0A0A0A;         /* Near black */
--surface: #141414;            /* Card backgrounds */
--surface-elevated: #1A1A1A;   /* Elevated cards */
--foreground: #FFFFFF;         /* Primary text */
--muted: #888888;              /* Secondary text */
--border: #2A2A2A;             /* Subtle borders */
--accent: #00B4D8;             /* HYROS teal/blue */
--accent-hover: #00D4FF;       /* Accent hover state */

/* Light Mode (Optional) */
--background: #FFFFFF;
--surface: #F5F5F5;
--surface-elevated: #FAFAFA;
--foreground: #0A0A0A;
--muted: #666666;
--border: #E5E5E5;
--accent: #0077B6;
--accent-hover: #00B4D8;
```

---

## Part 4: Component Architecture

### Core Components Needed

```
src/components/
├── layout/
│   ├── Header.tsx              # Site header with logo + nav
│   ├── Footer.tsx              # Minimal footer
│   └── PageContainer.tsx       # Standard page wrapper
├── ui/
│   ├── Button.tsx              # Primary/secondary buttons
│   ├── Card.tsx                # Base card component
│   └── Accordion.tsx           # For lesson expansion
├── content/
│   ├── CategoryCard.tsx        # Business model selector
│   ├── LessonAccordion.tsx     # Expandable lesson item
│   ├── VideoEmbed.tsx          # Wistia video wrapper
│   └── Hero.tsx                # Page hero sections
└── icons/
    └── HyrosLogo.tsx           # SVG logo component
```

### Page Templates

**Homepage:**
- Hero with welcome message
- Business model selector (5 cards)
- Optional: Featured lessons preview

**Category Page:**
- Category hero with intro video
- Description text
- Accordion lesson list

---

## Part 5: Implementation Phases

### Phase 1: Design Foundation
- [ ] Update color palette in globals.css for HYROS brand
- [ ] Create base layout components (Header, Footer)
- [ ] Design homepage with 2-3 variations
- [ ] Choose final homepage design
- [ ] Create design style guide document

### Phase 2: Homepage Build
- [ ] Implement chosen homepage design
- [ ] Build CategoryCard component
- [ ] Add business model selector
- [ ] Responsive testing

### Phase 3: Category Pages
- [ ] Create category page template
- [ ] Build LessonAccordion component
- [ ] Build VideoEmbed component
- [ ] Create all 5 category pages

### Phase 4: Content Migration
- [ ] Extract all video embed codes from current site
- [ ] Migrate lesson text content
- [ ] Add documentation links
- [ ] Verify all content

### Phase 5: Polish & Launch
- [ ] Dark/light mode toggle
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Accessibility audit
- [ ] Deploy to production

---

## Part 6: Homepage Design Variations

We will create 3 homepage variations to choose from:

### Variation A: "Hero Focus"
- Large hero section with animated background
- Single prominent CTA
- Business model cards below in grid
- Minimal, dramatic

### Variation B: "Cards First"
- Compact hero with title only
- Business model cards immediately visible
- More content above the fold
- Practical, efficient

### Variation C: "Split Layout"
- Left side: Welcome video
- Right side: Business model list
- Balanced content presentation
- Video-forward approach

---

## Part 7: Technical Considerations

### Video Embedding
- Current site uses Wistia
- Extract embed codes during content migration
- Create reusable VideoEmbed component
- Support responsive sizing

### External Links
- Documentation: docs.hyros.com
- Dashboard: app.hyros.com
- Facebook group links
- Preserve all external link destinations

### Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- No layout shift from video loading

---

## Next Steps

1. **Approve this plan** - Review and confirm direction
2. **Create homepage variations** - Design 2-3 options
3. **Select final design** - User picks preferred style
4. **Build style guide** - Document patterns for consistency
5. **Implement full site** - Build all pages to style guide

---

## Open Questions

1. Should we add the Agency section now (even though not active on current site)?
2. Do we want dark mode only, or include light mode toggle?
3. Should lessons have individual URLs or stay accordion-style?
4. Any additional pages needed beyond the 5 business models?

---

*Ready to proceed with homepage design variations when approved.*
