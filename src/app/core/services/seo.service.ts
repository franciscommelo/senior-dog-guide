import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Article } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  updateArticleMeta(article: Article): void {
    const fullTitle = `${article.title} | Senior Dog Guide`;
    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: article.description });

    // Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: article.description });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:image', content: article.heroImage });
    this.metaService.updateTag({ property: 'og:image:alt', content: article.heroImageAlt });

    // Article-specific Open Graph tags
    this.metaService.updateTag({ property: 'article:published_time', content: article.date });
    this.metaService.updateTag({ property: 'article:author', content: article.author });
    this.metaService.updateTag({ property: 'article:section', content: article.category });

    // Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: article.description });
    this.metaService.updateTag({ name: 'twitter:image', content: article.heroImage });

    // Keywords from tags
    this.metaService.updateTag({ name: 'keywords', content: article.tags.join(', ') });
  }

  updatePageMeta(title: string, description: string): void {
    const fullTitle = `${title} | Senior Dog Guide`;
    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
