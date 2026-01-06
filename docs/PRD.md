# Product Requirements Document: HYROS Training Site

## Overview

A modern, LLM-optimized training platform built with Next.js that recreates the functionality of training.hyros.com while adopting the clean, professional aesthetic of Anthropic's Academy design.

---

## Goals

### Primary Goals
1. **LLM Readability** - Structure all content for easy consumption by language models
2. **Clean Modern Design** - Adopt Anthropic Academy's minimal, professional aesthetic
3. **Content Organization** - Maintain HYROS training structure across business verticals
4. **Accessibility** - Full WCAG 2.1 AA compliance
5. **Performance** - Sub-2s initial load, 90+ Lighthouse scores

### Non-Goals (Phase 1)
- User authentication/login
- Progress tracking
- Video hosting (embed only)
- Community features
- Payment integration

---

## Target Audience

| Segment | Description |
|---------|-------------|
| **Agency Owners** | Marketing agencies using HYROS for client attribution |
| **E-commerce Brands** | DTC brands optimizing ad spend |
| **Call-Based Businesses** | High-ticket sales via phone |
| **SaaS Companies** | Software businesses tracking conversions |
| **Info/Education Marketers** | Course creators, coaches, educators |

---

## Content Structure

### Top-Level Categories

```
/                           # Homepage with featured content
/agency/                    # Agency training modules
/ecommerce/                 # E-commerce optimization
/calls/                     # Call-based business training
/saas/                      # SaaS-specific training
/info-education/            # Info/Education marketing
/advanced/                  # Advanced training modules
```

### Content Hierarchy

```
Category
├── Module
│   ├── Lesson
│   │   ├── Video (embedded)
│   │   ├── Problem Statement
│   │   ├── HYROS Solution
│   │   └── Documentation Links
│   └── Resources
└── Quick Start Guide
```

---

## Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 15 (App Router) | SSG for LLM crawlability, RSC support |
| Styling | Tailwind CSS 4 | Consistent with style guide |
| Content | MDX | Structured, parseable content |
| UI Components | shadcn/ui | Accessible, customizable |
| Fonts | Libre Baskerville + System | Per style guide |
| Icons | Lucide React | Consistent iconography |

### LLM Optimization Strategy

1. **Semantic HTML** - Proper heading hierarchy, landmark regions
2. **Structured Data** - JSON-LD schema for courses/lessons
3. **Clean URLs** - Human and machine readable paths
4. **MDX Content** - Plain text content easily extracted
5. **llms.txt** - Standard LLM instruction file at root
6. **Sitemap** - Comprehensive XML sitemap
7. **RSS Feed** - Machine-readable content feed
8. **API Routes** - JSON endpoints for programmatic access

### File Structure

```
TrainingSite/
├── .claude/
│   ├── settings.json       # Claude Code project settings
│   ├── instructions.md     # AI assistant instructions
│   └── style.md           # Design system reference
├── docs/
│   ├── PRD.md             # This document
│   └── ARCHITECTURE.md    # Technical architecture
├── public/
│   ├── llms.txt           # LLM instructions
│   ├── robots.txt         # Crawler instructions
│   └── sitemap.xml        # Generated sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── (categories)/  # Route groups
│   │   └── api/           # JSON API routes
│   ├── components/
│   │   ├── ui/            # shadcn components
│   │   ├── layout/        # Layout components
│   │   └── content/       # Content components
│   ├── content/           # MDX content files
│   │   ├── agency/
│   │   ├── ecommerce/
│   │   ├── calls/
│   │   ├── saas/
│   │   ├── info-education/
│   │   └── advanced/
│   ├── lib/
│   │   ├── content.ts     # Content utilities
│   │   └── utils.ts       # General utilities
│   └── styles/
│       └── globals.css    # Global styles
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## Design System

### Color Palette

**Light Mode**
- Background: `#FFFFFF` (pure white)
- Surface: `#F8F6F3` (warm cream - featured sections)
- Foreground: `#171717` (near black)
- Muted: `#737373` (secondary text)
- Border: `#E8E8E8` (subtle dividers)
- Accent: `#D4D0C8` (card backgrounds)

**Dark Mode**
- Background: `#0A0A0A` (near black)
- Surface: `#171717` (elevated surfaces)
- Foreground: `#FAFAFA` (near white)
- Muted: `#A3A3A3` (secondary text)
- Border: `#2E2E2E` (subtle dividers)

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Hero Title | Libre Baskerville | 400 | 48-60px |
| Page Title | Libre Baskerville | 400 | 36-48px |
| Section Heading | System Sans | 600 | 24px |
| Card Title | System Sans | 500 | 16px |
| Body | System Sans | 400 | 15px |
| Small | System Sans | 400 | 13px |

### Components

1. **Navigation** - Minimal top bar with logo, links, CTA
2. **Hero Section** - Large serif title, subtitle, optional featured cards
3. **Category Cards** - Clean cards with title, description, arrow
4. **Lesson Cards** - Video thumbnail, title, duration
5. **Content Layout** - Left sidebar, main content, optional TOC

---

## Content Requirements

### Homepage
- Hero with "HYROS Academy" title
- Featured/new courses section
- Category navigation cards
- Quick links to documentation

### Category Pages
- Overview of training modules
- Quick start guide
- Module listing with descriptions

### Lesson Pages
- Embedded video player
- Problem statement
- HYROS solution explanation
- Related documentation links
- Next/previous navigation

---

## LLM Content Guidelines

### For llms.txt
```
# HYROS Training Site

> A comprehensive training platform for HYROS ad attribution software.

## Content Structure
- /agency/ - Agency owner training
- /ecommerce/ - E-commerce brand training
- /calls/ - Call-based business training
- /saas/ - SaaS company training
- /info-education/ - Info marketer training
- /advanced/ - Advanced feature training

## API Endpoints
- /api/content - Full content index
- /api/lessons - All lessons with metadata
- /api/search - Search functionality
```

### Structured Data (JSON-LD)
Each lesson should include:
- Course schema
- VideoObject schema
- BreadcrumbList schema

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| SEO Score | 95+ |
| Accessibility Score | 100 |
| LLM Content Extraction | 100% parseable |

---

## Phases

### Phase 1: Foundation (Current)
- Project setup
- Design system implementation
- Core layout components
- Empty content structure

### Phase 2: Content Migration
- MDX content creation
- Video embeds
- Internal linking
- Search functionality

### Phase 3: Enhancement
- API routes for LLM access
- Analytics integration
- Performance optimization
- A11y audit

---

## Open Questions

1. Video hosting platform for embeds?
2. Search implementation (client-side vs serverless)?
3. Analytics requirements?
4. Multi-language support needed?

---

*Last Updated: January 6, 2026*
