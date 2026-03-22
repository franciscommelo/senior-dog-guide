import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../core/models';
import { ArticleService } from '../../core/services/article.service';
import { SeoService } from '../../core/services/seo.service';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';

interface CategoryCard {
  label: string;
  icon: string;
  path: string;
  category: string;
  count: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private articleService = inject(ArticleService);
  private seoService = inject(SeoService);

  featuredArticles: Article[] = [];

  categoryCards: CategoryCard[] = [
    { label: 'Joint Health', icon: '🦴', path: '/blog/health', category: 'health', count: 0 },
    { label: 'Brain & Cognition', icon: '🧠', path: '/blog/health', category: 'health', count: 0 },
    { label: 'Nutrition', icon: '🥗', path: '/blog/nutrition', category: 'nutrition', count: 0 },
    { label: 'Comfort & Mobility', icon: '🛏️', path: '/blog/comfort', category: 'comfort', count: 0 },
    { label: 'Health Guides', icon: '🩺', path: '/blog/health', category: 'health', count: 0 },
    { label: 'Breed Guides', icon: '📋', path: '/blog/breed-guide', category: 'breed-guide', count: 0 },
  ];

  ngOnInit(): void {
    this.seoService.updatePageMeta(
      'Senior Dog Guide — Helping Your Best Friend Age Gracefully',
      'Expert, evidence-based guidance on senior dog health, supplements, nutrition, and comfort to help your aging dog live their best life.'
    );
    this.featuredArticles = this.articleService.getFeatured(3);

    this.categoryCards = this.categoryCards.map((card) => ({
      ...card,
      count: this.articleService.getByCategory(card.category as any).length,
    }));
  }
}
