import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BlogListComponent } from './features/blog/blog-list.component';
import { ArticleDetailComponent } from './features/article/article-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:category', component: BlogListComponent },
  { path: 'blog/:category/:slug', component: ArticleDetailComponent },
  { path: '**', redirectTo: '' },
];
