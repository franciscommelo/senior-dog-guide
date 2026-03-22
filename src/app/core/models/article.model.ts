export type ArticleCategory =
  | 'supplements'
  | 'health'
  | 'nutrition'
  | 'breed-guide'
  | 'lifestyle'
  | 'comfort';

export interface AffiliateProduct {
  name: string;
  url: string;
  program: string;
  reason: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: ArticleCategory;
  tags: string[];
  author: string;
  heroImage: string;
  heroImageAlt: string;
  tldr: string;
  content: string;
  affiliateProducts: AffiliateProduct[];
  affiliateDisclosure: boolean;
  internalLinks: { title: string; slug: string; category: string }[];
  externalLinks: { title: string; url: string; source: string }[];
  readingTime: number;
  wordCount: number;
  faqs?: { question: string; answer: string }[];
}
