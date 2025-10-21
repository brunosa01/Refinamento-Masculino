import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione aqui
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}