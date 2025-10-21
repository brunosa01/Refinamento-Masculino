import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions.html',
  styleUrl: './promotions.scss'
})
export class Promotions {
  // Array com os dados dos produtos
  promotions = [
    { id: 1, title: 'Relógio Clássico de Couro', currentPrice: 'R$ 349,90', oldPrice: 'R$ 499,90', img: 'https://placehold.co/400x400/D4B499/FFFFFF?text=Relógio', link: '#' },
    { id: 2, title: 'Tênis Casual Elegante', currentPrice: 'R$ 299,00', oldPrice: 'R$ 380,00', img: 'https://placehold.co/400x400/5A67D8/FFFFFF?text=Tênis', link: '#' },
    { id: 3, title: 'Blazer de Linho Confortável', currentPrice: 'R$ 499,00', oldPrice: 'R$ 650,00', img: 'https://placehold.co/400x400/81C784/FFFFFF?text=Blazer', link: '#' },
    { id: 4, title: 'Mala de Viagem de Couro', currentPrice: 'R$ 899,00', oldPrice: 'R$ 1.200,00', img: 'https://placehold.co/400x400/2F4F4F/FFFFFF?text=Mala', link: '#' },
  ];
}