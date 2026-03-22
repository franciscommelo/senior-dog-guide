import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);

  toggleMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Health', path: '/blog/health' },
    { label: 'Supplements', path: '/blog/supplements' },
    { label: 'Nutrition', path: '/blog/nutrition' },
    { label: 'Comfort', path: '/blog/comfort' },
    { label: 'Breed Guides', path: '/blog/breed-guide' },
  ];
}
