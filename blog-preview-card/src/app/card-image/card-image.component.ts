import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss',
})
export class CardImageComponent {
  @Input() width: number = 336;
  @Input() height: number = 201;
}
