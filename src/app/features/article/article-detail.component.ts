import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Article } from '../../core/models';
import { ArticleService } from '../../core/services/article.service';
import { SeoService } from '../../core/services/seo.service';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, ArticleCardComponent],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private seoService = inject(SeoService);

  article: Article | null = null;
  relatedArticles: Article[] = [];
  notFound = false;

  private categoryLabels: Record<string, string> = {
    supplements: 'Supplements',
    health: 'Health',
    nutrition: 'Nutrition',
    'breed-guide': 'Breed Guides',
    lifestyle: 'Lifestyle',
    comfort: 'Comfort',
  };

  get categoryLabel(): string {
    return this.article ? (this.categoryLabels[this.article.category] ?? this.article.category) : '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.article = this.articleService.getBySlug(slug) ?? null;

      if (this.article) {
        this.seoService.updateArticleMeta(this.article);
        this.relatedArticles = this.articleService.getRelated(this.article, 3);
      } else {
        this.notFound = true;
        this.seoService.updatePageMeta('Article Not Found', 'The article you are looking for could not be found.');
      }
    });
  }
}
