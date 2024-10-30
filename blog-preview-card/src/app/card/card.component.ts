import { Component } from '@angular/core';
import { CardAuthorComponent } from '../card-author/card-author.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardImageComponent } from '../card-image/card-image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardAuthorComponent, CardContentComponent, CardImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  imageUrl = '../../assets/images/illustration-article.svg';
  category = 'Learning';
  title = 'HTML & CSS Foundations';
  description =
    'These languages are the backbone of every website, defining structure, content, and presentation.';
  authorUrl = '../../assets/images/image-avatar.webp';
  authorName = 'Greg Hooper';
}
