import { Component } from '@angular/core';
import { CardAuthorComponent } from '../card-author/card-author.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardImageComponent } from '../card-image/card-image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardAuthorComponent, CardContentComponent, CardImageComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  category = 'Learning';
  publishDate = '21 Dec 2023';
  title = 'HTML & CSS Foundations';
  description =
    'These languages are the backbone of every website, defining structure, content, and presentation.';
  authorUrl = 'assets/images/image-avatar.webp';
  authorName = 'Greg Hooper';
}
