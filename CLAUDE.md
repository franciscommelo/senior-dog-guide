# CLAUDE.md — Senior Dog Guide (Angular App)

## Project Overview

**Name:** Senior Dog Guide
**Domain target:** `seniordogguide.com` (Tier 1 keyword-rich)
**Tagline:** "Helping your best friend age gracefully"
**Stack:** Angular 19, SCSS, standalone components, Angular Router

## Brand & Voice

- **Audience:** Dog owners aged 30-60 with dogs 7+ years old
- **Tone:** Warm, trustworthy, practical. Like a knowledgeable friend who loves dogs — not a vet, not a salesperson. Empathetic but never sappy. Direct but never cold.
- **Color palette:** Warm amber, golden, earth tones (`#D4813A`, `#2C1810`, `#F5E6D3`, `#8B4513`)
- **Never:** clinical/sterile, cartoon, puppy content, veterinary diagnoses

---

## Angular Architecture

```
src/
├── app/
│   ├── core/
│   │   ├── models/           # Article, Category, AffiliateProduct interfaces
│   │   ├── services/         # ArticleService, SeoService, CategoryService
│   │   └── guards/
│   ├── features/
│   │   ├── home/             # Hero + featured articles + category grid
│   │   ├── blog/             # Article list (by category or all)
│   │   ├── article/          # Single article view
│   │   ├── about/
│   │   └── search/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── article-card/
│   │   │   ├── tl-dr-box/
│   │   │   ├── affiliate-disclosure/
│   │   │   └── breadcrumb/
│   │   └── pipes/
└── assets/
    ├── articles/             # JSON article data files
    └── images/
```

### Routes
```
/                          → HomeComponent
/blog                      → ArticleListComponent (all)
/blog/:category            → ArticleListComponent (filtered)
/blog/:category/:slug      → ArticleDetailComponent
/about                     → AboutComponent
```

---

## Content Data Model

```typescript
interface Article {
  slug: string;
  title: string;
  description: string;         // 150-160 chars for meta
  date: string;                // ISO date
  updatedDate?: string;
  category: ArticleCategory;
  tags: string[];
  author: string;              // default: "Editorial Team"
  heroImage: string;
  heroImageAlt: string;        // keyword-rich alt text
  tldr: string;                // TL;DR box content
  content: string;             // HTML content
  affiliateProducts: AffiliateProduct[];
  affiliateDisclosure: boolean; // always true if products present
  internalLinks: { title: string; slug: string }[];
  externalLinks: { title: string; url: string; source: string }[];
  readingTime: number;         // minutes
  wordCount: number;           // target: 1400-1800
  faqs?: { question: string; answer: string }[];
}

type ArticleCategory =
  | 'supplements'
  | 'health'
  | 'nutrition'
  | 'breed-guide'
  | 'lifestyle'
  | 'comfort';

interface AffiliateProduct {
  name: string;
  url: string;
  program: string;  // amazon | chewy | iherb | petlab | etc.
  reason: string;   // why we recommend it (specific benefit)
}
```

---

## SEO Rules (implement in SeoService)

- `<title>` = article title (under 60 chars)
- `<meta name="description">` = article description (150-160 chars)
- Canonical URL on every page
- Open Graph tags (og:title, og:description, og:image)
- JSON-LD Article schema with author, datePublished, dateModified
- JSON-LD FAQ schema on articles with faqs[]
- Primary keyword in first 100 words of content
- URL pattern: `/blog/[category]/[slug]` (slug max 5 words, hyphens)

---

## Content Pillars

### Priority 1 — Publish First (Low KD, Quick Wins)
- Joint Health & Supplements (8-12 articles)
- Cognitive Health (5-8 articles)
- Nutrition & Diet (8-12 articles)
- Comfort & Mobility (6-8 articles)
- Health Concerns (8-12 articles)
- Breed-specific guides (10+ articles)

### Keyword Targets (first batch)
| Keyword | Vol/mo | KD | Intent |
|---------|--------|----|--------|
| signs of dementia in senior dogs | 3K-5K | 15-25 | Info |
| fish oil dosage for senior dogs | 1.5K-3K | 10-20 | Info |
| how to help old dog with stiff legs | 2K-3.5K | 10-18 | Info |
| senior dog not eating but drinking water | 2.5K-4K | 15-25 | Info |
| best orthopedic dog bed large breed | 2K-4K | 20-30 | Commercial |
| dog ramp for bed arthritis | 1.5K-2.5K | 10-20 | Commercial |

---

## Affiliate Programs

| Program | Commission | Cookie |
|---------|-----------|--------|
| Amazon Associates | 3-4% | 24h |
| Chewy | 4% | 15 days |
| Petlab Co | 15-20% | 30 days |
| iHerb (pet section) | 5-10% | 7 days |
| BarkBox | $18/signup | 30 days |
| Embark DNA | 10% | 30 days |

**Rule:** Max 2-3 affiliate mentions per article. Format: "We recommend [Product] (affiliate link) because [specific reason]". Always include affiliate disclosure at top of article.

---

## Content Rules (enforce in templates)

- Articles: 1,400–1,800 words
- Short paragraphs (2-3 sentences max)
- TL;DR box at the top of every article
- H2 and H3 headers for scannable structure
- Bold key takeaways
- End with CTA (related article, product page, or email signup)
- NO medical diagnoses — always "consult your vet" disclaimers
- 2-3 internal links to existing articles
- 1-2 external links (AKC, PetMD, vet studies)
- Alt text on all images (descriptive + keyword)

---

## Digital Product

**"Senior Dog Wellness Kit"** — $9.99 (Gumroad/LemonSqueezy)
- Supplement comparison chart by condition
- Daily health tracker printable
- Vet visit preparation checklist
- Homemade senior dog treat recipes (10)
- Breed-specific aging timeline (top 15 breeds)
- Emergency signs checklist

---

## Registry

`src/assets/registry.json` — tracks all published articles.
- Used to prevent duplicate topics (reject if >50% tag overlap)
- Updated on every new article commit

---

## Image Style (Midjourney)

Prompt template: `[subject], warm golden hour lighting, soft bokeh background, editorial pet photography, Canon EOS R5 85mm f/1.4, warm amber and earth tones, cozy home environment, --ar 16:9 --v 6.1 --style raw`

---

## Authority Sources (cite for E-E-A-T)

- petmd.com — vet-verified content
- akc.org — breed standards and health
- whole-dog-journal.com — nutrition deep-dives
- veterinarypartner.vin.com — vet-authored articles

## Competitor Monitoring

- goldenpawscare.com
- seniordogwellbeing.com
- dogsnaturallymagazine.com
