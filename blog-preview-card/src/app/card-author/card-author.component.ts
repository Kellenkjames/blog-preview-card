import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-author',
  standalone: true,
  imports: [],
  templateUrl: './card-author.component.html',
  styleUrls: ['./card-author.component.scss'],
})
export class CardAuthorComponent {
  @Input() authorName!: string;
  @Input() authorUrl!: string;
}
