import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navColumns = [
    {
      heading: 'Topics',
      links: [
        { label: 'Health Guides', path: '/blog/health' },
        { label: 'Supplements', path: '/blog/supplements' },
        { label: 'Nutrition', path: '/blog/nutrition' },
        { label: 'Comfort & Mobility', path: '/blog/comfort' },
        { label: 'Breed Guides', path: '/blog/breed-guide' },
      ],
    },
    {
      heading: 'Popular Articles',
      links: [
        { label: 'Signs of Dog Dementia', path: '/blog/health/signs-of-dementia-senior-dogs' },
        { label: 'Fish Oil Dosage Guide', path: '/blog/supplements/fish-oil-dosage-senior-dogs' },
        { label: 'Stiff Legs in Old Dogs', path: '/blog/health/how-to-help-old-dog-stiff-legs' },
      ],
    },
    {
      heading: 'About',
      links: [
        { label: 'All Articles', path: '/blog' },
        { label: 'Health', path: '/blog/health' },
        { label: 'Supplements', path: '/blog/supplements' },
      ],
    },
  ];
}
