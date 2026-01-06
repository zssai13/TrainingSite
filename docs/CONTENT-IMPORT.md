# Content Import Guide

**How to create new training pages or update existing content**

---

## Quick Start

To create a new training page:

1. Copy an existing training page (e.g., `ecom-growth-training/page.tsx`)
2. Extract video IDs from the source page
3. Update the lesson data
4. Customize the page text

---

## Step 1: Extract Wistia Video IDs

### Using Browser DevTools

1. Navigate to the source training page (e.g., `https://training.hyros.com/ecom-growth-training/`)
2. Open browser DevTools (F12 or right-click → Inspect)
3. Go to Console tab
4. Run this script:

```javascript
// Extract all Wistia video IDs from the page
document.querySelectorAll('[class*="wistia_async_"]')
  .forEach(el => {
    const match = el.className.match(/wistia_async_([a-zA-Z0-9]+)/);
    if (match) console.log(match[1]);
  });
```

5. Copy the video IDs (they look like: `6uyc4d8dfe`, `drhan93ocz`)

### Video ID Order

The IDs typically appear in this order:
1. **Welcome video** (first ID)
2. **Lesson 01, 02, 03...** (remaining IDs in order)

---

## Step 2: Create the Page File

### Directory Structure

Create a new folder in `src/app/` with your URL slug:

```
src/app/
├── your-new-page/
│   └── page.tsx
```

### Copy Template

Copy from an existing training page:

```bash
cp src/app/ecom-growth-training/page.tsx src/app/your-new-page/page.tsx
```

---

## Step 3: Update the Lesson Data

### Lesson Array Structure

```typescript
const lessons = [
  {
    id: 1,
    number: '01',
    title: 'Lesson Title Here',
    duration: '4 min',
    videoId: 'YOUR_WISTIA_ID_HERE',  // From Step 1
    problem: [
      'First problem point',
      'Second problem point',
      'Third problem point',
    ],
    solution: 'Paragraph explaining how HYROS solves these problems...',
    docsUrl: 'https://docs.hyros.com/relevant-page/',
    docsLabel: 'Documentation Link Text',
  },
  // ... more lessons
]
```

### Fields to Update

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique number (1, 2, 3...) | `1` |
| `number` | Display number with leading zero | `'01'` |
| `title` | Lesson title | `'Using Correct Data To Scale Ads'` |
| `duration` | Video length | `'4 min'` |
| `videoId` | Wistia ID from Step 1 | `'6uyc4d8dfe'` |
| `problem` | Array of 2-4 problem bullet points | `['Problem 1', 'Problem 2']` |
| `solution` | 1-2 sentence solution paragraph | `'HYROS provides...'` |
| `docsUrl` | Full URL to relevant docs page | `'https://docs.hyros.com/...'` |
| `docsLabel` | Button text for docs link | `'Initial Setup Guide'` |

---

## Step 4: Update Page Text

### Welcome Section

Update these strings:

```typescript
// Welcome video ID
src="https://fast.wistia.net/embed/iframe/YOUR_WELCOME_VIDEO_ID?seo=true&videoFoam=true"

// Page title
<h2>Welcome to [Category] Training</h2>

// iframe title attribute
title="Welcome to [Category] Training"
```

### Lessons Section Header

```typescript
<h2 className="...">
  X lessons to [benefit statement]
</h2>
```

Examples:
- "5 lessons to boost your ROAS"
- "3 lessons to maximize your MRR"
- "5 lessons to track call conversions"

### CTA Section

```typescript
<p className="...">
  Join our community to share strategies with other [audience type]...
</p>
```

### Function Name

Update the export function name:

```typescript
export default function YourPageNameTrainingPage() {
```

---

## Step 5: Test

1. Run the dev server: `npm run dev`
2. Navigate to your new page: `http://localhost:3000/your-new-page/`
3. Verify:
   - Welcome video plays
   - All lesson videos play
   - Accordion expands/collapses
   - Documentation links work

---

## Wistia Video Embed Format

All videos use this iframe format:

```tsx
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

### URL Parameters

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `seo` | `true` | Enable SEO features |
| `videoFoam` | `true` | Responsive sizing |

---

## Current Video IDs Reference

### Shared Welcome Video
All pages use: `drhan93ocz`

### E-commerce (`/ecom-growth-training/`)
| Lesson | Video ID |
|--------|----------|
| 01 | `6uyc4d8dfe` |
| 02 | `gmb2ag9wbi` |
| 03 | `55c0ekbal0` |
| 04 | `mvdr7crkqa` |
| 05 | `opw9v390lw` |

### SaaS (`/saas-software/`)
| Lesson | Video ID |
|--------|----------|
| 01 | `ztmsuoaq65` |
| 02 | `3r4573u3jx` |
| 03 | `klubtfop2p` |

### Call-Based (`/call-based/`)
| Lesson | Video ID |
|--------|----------|
| 01 | `6uyc4d8dfe` |
| 02 | `kht91wxugs` |
| 03 | `55c0ekbal0` |
| 04 | `mvdr7crkqa` |
| 05 | `opw9v390lw` |

### General Lessons (`/general-lessons/`)
| Lesson | Video ID |
|--------|----------|
| 01 | `6uyc4d8dfe` |
| 02 | `kht91wxugs` |
| 03 | `55c0ekbal0` |
| 04 | `mvdr7crkqa` |
| 05 | `opw9v390lw` |

### Agency (`/agency/`)
| Lesson | Video ID |
|--------|----------|
| 01 | `6uyc4d8dfe` |
| 02 | `kht91wxugs` |
| 03 | `55c0ekbal0` |
| 04 | `mvdr7crkqa` |
| 05 | `opw9v390lw` |

---

## Checklist for New Pages

- [ ] Created folder in `src/app/`
- [ ] Copied template page
- [ ] Extracted video IDs from source
- [ ] Updated welcome video ID
- [ ] Updated all lesson video IDs
- [ ] Updated lesson titles
- [ ] Updated lesson durations
- [ ] Updated problem bullet points
- [ ] Updated solution paragraphs
- [ ] Updated documentation URLs
- [ ] Updated page headlines
- [ ] Updated CTA section text
- [ ] Updated function export name
- [ ] Tested all videos play
- [ ] Tested accordion functionality
- [ ] Verified responsive design
