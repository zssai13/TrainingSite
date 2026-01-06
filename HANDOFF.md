# Project Handoff - HYROS Training Site

**Last Updated:** January 6, 2026
**Status:** Ready for GitHub Upload

---

## Quick Start

```bash
cd "C:\Users\bills\OneDrive\Desktop\HYROS CODE\TrainingSite"
npm install
npm run dev
```

Server runs at: **http://localhost:3004** (port may vary)

---

## Project Overview

A modern training site for HYROS, recreating https://training.hyros.com/ with a clean, minimalist design inspired by Anthropic's aesthetic.

**Design Direction:**
- Heavy serif headlines (Source Serif 4 Black, weight 900)
- White background with hard black text/UI
- Cream accent sections (`#FAF9F7`)
- Minimalist, elegant, lots of whitespace
- Simple footer across all pages

---

## What's Been Completed

### Phase 1: Planning ✅
- [x] Mapped URL structure from training.hyros.com
- [x] Created import plan (`docs/IMPORT-PLAN.md`)
- [x] Analyzed HYROS brand from hyros.com
- [x] Analyzed Anthropic design patterns

### Phase 2: Homepage ✅
- [x] Built homepage with all sections
- [x] Heavy serif headline style
- [x] Business model cards (5 active + 1 coming soon)
- [x] Stats bar, How It Works section
- [x] Responsive design complete
- [x] Simple footer with 3 links

### Phase 3: Training Pages ✅
- [x] E-commerce page with real Wistia videos (5 lessons)
- [x] SaaS page with real Wistia videos (3 lessons)
- [x] Call-Based page with real Wistia videos (5 lessons)
- [x] General Lessons (Info & Education) with real Wistia videos (5 lessons)
- [x] Agency page (new, using shared videos with agency-focused content)

### Phase 4: Documentation ✅
- [x] Updated STYLE-GUIDE.md with complete design system
- [x] Updated ARCHITECTURE.md with current structure
- [x] Created CONTENT-IMPORT.md guide for adding new pages
- [x] Updated HANDOFF.md (this file)

---

## File Structure

```
TrainingSite/
├── CLAUDE.md                     # AI instructions
├── HANDOFF.md                    # This file
│
├── docs/
│   ├── STYLE-GUIDE.md           # Complete design system ⭐
│   ├── ARCHITECTURE.md          # Technical architecture
│   ├── CONTENT-IMPORT.md        # Guide for importing content ⭐
│   ├── PRD.md                   # Product requirements
│   └── IMPORT-PLAN.md           # URL mapping
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts)
│   │   ├── page.tsx             # Homepage ✅
│   │   │
│   │   ├── ecom-growth-training/
│   │   │   └── page.tsx         # E-commerce ✅
│   │   │
│   │   ├── call-based/
│   │   │   └── page.tsx         # Call-Based ✅
│   │   │
│   │   ├── saas-software/
│   │   │   └── page.tsx         # SaaS ✅
│   │   │
│   │   ├── general-lessons/
│   │   │   └── page.tsx         # Info & Education ✅
│   │   │
│   │   └── agency/
│   │       └── page.tsx         # Agency ✅
│   │
│   └── styles/
│       └── globals.css
│
└── package.json
```

---

## All Pages Complete

| URL | Page | Lessons | Status |
|-----|------|---------|--------|
| `/` | Homepage | - | ✅ Complete |
| `/ecom-growth-training/` | E-commerce Training | 5 | ✅ Complete |
| `/call-based/` | Call-Based Business | 5 | ✅ Complete |
| `/saas-software/` | SaaS Training | 3 | ✅ Complete |
| `/general-lessons/` | Info & Education | 5 | ✅ Complete |
| `/agency/` | Agency Training | 5 | ✅ Complete |

---

## Key Documentation

### For Design/Styling
Read: **`docs/STYLE-GUIDE.md`**
- Typography (Source Serif 4, DM Sans)
- Color palette (black, white, cream)
- Component patterns with copy-paste code
- Training page template

### For Adding New Training Pages
Read: **`docs/CONTENT-IMPORT.md`**
- How to extract Wistia video IDs
- Lesson data structure
- Step-by-step page creation guide
- Current video ID reference

### For Technical Overview
Read: **`docs/ARCHITECTURE.md`**
- Tech stack (Next.js 15, TypeScript, Tailwind)
- Directory structure
- Component patterns
- Video integration details

---

## Next Step: GitHub Upload

### 1. Initialize Git (if not already)

```bash
cd "C:\Users\bills\OneDrive\Desktop\HYROS CODE\TrainingSite"
git init
```

### 2. Create .gitignore

Ensure `.gitignore` includes:
```
node_modules/
.next/
.env*
*.log
.DS_Store
.playwright-mcp/
```

### 3. Stage and Commit

```bash
git add .
git commit -m "Initial commit: HYROS Training Site

- Homepage with business model cards
- 5 training pages with Wistia video embeds
- Responsive design with Tailwind CSS
- Complete documentation

🤖 Generated with Claude Code"
```

### 4. Create GitHub Repository

Option A: GitHub CLI
```bash
gh repo create hyros-training-site --public --source=. --push
```

Option B: Manual
1. Go to github.com → New Repository
2. Name: `hyros-training-site`
3. Don't initialize with README (we have one)
4. Copy the remote URL

```bash
git remote add origin https://github.com/YOUR_USERNAME/hyros-training-site.git
git branch -M main
git push -u origin main
```

### 5. Deploy to Vercel (Optional)

```bash
npx vercel
```

Or connect via Vercel dashboard → Import Git Repository

---

## Design Decisions Made

1. **Simple footer on all pages** - Single row with logo + 3 links for consistency
2. **No hero watch intro button** - Just "Start Learning" CTA on homepage
3. **Wistia iframe embeds** - Simple, responsive video integration
4. **Shared welcome video** - All training pages use same intro video
5. **Agency page uses shared videos** - Can be updated with dedicated content later
6. **No component extraction yet** - Header/Footer inline in each page for simplicity

---

## Future Improvements (Not Required)

- [ ] Extract Header/Footer to shared components
- [ ] Add page metadata (title, description)
- [ ] Add Open Graph tags for social sharing
- [ ] Mobile hamburger menu
- [ ] Search functionality across lessons
- [ ] Agency page dedicated videos

---

## Support

**Documentation:**
- `docs/STYLE-GUIDE.md` - Design system
- `docs/ARCHITECTURE.md` - Technical details
- `docs/CONTENT-IMPORT.md` - Adding new content

**Key Files:**
- `src/app/page.tsx` - Homepage reference
- `src/app/ecom-growth-training/page.tsx` - Training page template

---

*Ready for GitHub upload and deployment.*
