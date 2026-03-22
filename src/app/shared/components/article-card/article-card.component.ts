import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Article } from '../../../core/models';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input({ required: true }) article!: Article;

  get excerpt(): string {
    return this.article.description.length > 120
      ? this.article.description.slice(0, 120).trimEnd() + '…'
      : this.article.description;
  }

  get categoryLabel(): string {
    const labels: Record<string, string> = {
      supplements: 'Supplements',
      health: 'Health',
      nutrition: 'Nutrition',
      'breed-guide': 'Breed Guide',
      lifestyle: 'Lifestyle',
      comfort: 'Comfort',
    };
    return labels[this.article.category] ?? this.article.category;
  }
}
