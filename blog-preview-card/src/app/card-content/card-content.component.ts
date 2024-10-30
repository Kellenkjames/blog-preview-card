import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [],
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent {
  @Input() category!: string;
  @Input() publishDate!: string;
  @Input() title!: string;
  @Input() description!: string;
}
