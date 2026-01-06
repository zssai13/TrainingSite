# Project Instructions

## Start Here

**Before doing ANY work, read these files in order:**

1. `HANDOFF.md` - Current project status and next steps
2. `docs/STYLE-GUIDE.md` - Complete design system (MUST READ before any frontend work)
3. `src/app/page.tsx` - Homepage implementation (reference for all patterns)

---

## Design & Frontend

**CRITICAL:** Always use the frontend design skills for any frontend or design work:
- `frontend-design:frontend-design` or `example-skills:frontend-design`

This includes:
- Building web components, pages, or applications
- Creating landing pages, dashboards, or UI layouts
- Styling or beautifying any web interface
- Any visual design work (HTML/CSS/React)

These skills ensure distinctive, production-grade interfaces with high design quality.

---

## Design System (Summary)

The approved design uses:

### Typography
- **Headlines:** Source Serif 4 Black (weight 900) - `font-display font-black`
- **Body:** DM Sans

### Colors
- **Background:** White (#FFFFFF)
- **Accent:** Cream (#FAF9F7)
- **Text:** Black with opacity (black/70, /60, /50, /40)
- **NO greys or oranges**

### Key Classes
```tsx
// Eyebrow text
className="text-[13px] uppercase tracking-[0.2em] text-black/40"

// Heavy headline
className="font-display font-black text-[clamp(1.75rem,4vw,3rem)] leading-tight"

// Container
className="max-w-[1400px] mx-auto px-6 lg:px-12"

// Black button
className="bg-black text-white px-6 py-3.5 text-[15px] font-medium hover:bg-black/80"
```

**Full details in `docs/STYLE-GUIDE.md`**

---

## URL Structure (Must Maintain)

These URLs must match exactly for backwards compatibility:
- `/` - Homepage (DONE)
- `/ecom-growth-training/` - E-commerce
- `/call-based/` - Call-based business
- `/saas-software/` - SaaS
- `/general-lessons/` - Info/Education
- `/agency/` - Agency (new)

---

## Running the Project

```bash
npm install
npm run dev
```

Server: http://localhost:3000 (or 3002)

---

## Important Notes

- Homepage is complete - use it as the reference for all other pages
- Style guide has copy-paste code for every component
- Maintain the heavy serif headline style throughout
- All cards use black borders and invert on hover
- Keep the minimalist, elegant aesthetic
