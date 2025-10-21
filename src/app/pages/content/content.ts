import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  blogPosts = [
    { id: 1, title: 'A Alfaiataria do Século XXI', summary: 'Descubra como os cortes clássicos se adaptaram ao mundo moderno, unindo conforto e elegância em peças versáteis...', img: 'https://placehold.co/600x400/404040/FFFFFF?text=Alfaiataria' },
    { id: 2, title: 'Comportamento e Postura', summary: 'A verdadeira elegância vai além da roupa. Saiba como a postura, a comunicação e o respeito impactam sua imagem...', img: 'https://placehold.co/600x400/A0A0A0/FFFFFF?text=Comportamento' },
    { id: 3, title: 'Como Escolher a Paleta de Cores', summary: 'Aprenda a harmonizar cores em seus looks para criar combinações sofisticadas e que valorizam seu tom de pele...', img: 'https://placehold.co/600x400/808080/FFFFFF?text=Cores' },
  ];
}