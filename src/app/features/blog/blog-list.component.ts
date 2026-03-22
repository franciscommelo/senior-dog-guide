import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article, ArticleCategory } from '../../core/models';
import { ArticleService } from '../../core/services/article.service';
import { SeoService } from '../../core/services/seo.service';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private seoService = inject(SeoService);

  articles: Article[] = [];
  category: ArticleCategory | null = null;

  private categoryLabels: Record<string, string> = {
    supplements: 'Supplements',
    health: 'Health Guides',
    nutrition: 'Nutrition',
    'breed-guide': 'Breed Guides',
    lifestyle: 'Lifestyle',
    comfort: 'Comfort & Mobility',
  };

  get pageTitle(): string {
    if (this.category && this.categoryLabels[this.category]) {
      return this.categoryLabels[this.category];
    }
    return 'All Articles';
  }

  get pageDescription(): string {
    if (this.category) {
      return `Browse all ${this.pageTitle.toLowerCase()} articles for senior dogs on Senior Dog Guide.`;
    }
    return 'Browse all senior dog wellness guides — covering health, supplements, nutrition, comfort, and more.';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cat = params['category'] as ArticleCategory | undefined;
      this.category = cat ?? null;

      this.articles = this.category
        ? this.articleService.getByCategory(this.category)
        : this.articleService.getAll();

      this.seoService.updatePageMeta(this.pageTitle, this.pageDescription);
    });
  }
}
