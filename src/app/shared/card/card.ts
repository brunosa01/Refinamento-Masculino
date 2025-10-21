import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  // Usando @Input() para permitir que o componente pai envie esses dados
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() oldPrice: string = '';
  @Input() currentPrice: string = '';
  @Input() description: string = '';
  @Input() linkUrl: string = '#';
  @Input() buttonText: string = 'Saiba Mais';
}