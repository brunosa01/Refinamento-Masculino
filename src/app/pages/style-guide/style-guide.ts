import { Component, signal } from '@angular/core'; // Importamos o 'signal'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-style-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-guide.html',
  styleUrl: './style-guide.scss'
})
export class StyleGuide {
  // Este signal vai guardar o número (index) do item que está aberto.
  // Se nenhum estiver aberto, o valor será 'null'.
  activeAccordionIndex = signal<number | null>(null);

  // Os dados para o nosso guia
  styleGuide = [
    { title: 'Casamento Formal / Gala', content: 'Para eventos de gala ou casamentos formais, o *smoking* é a escolha ideal. Opte por cores clássicas como preto, azul meia-noite ou cinza-carvão. Complemente com uma camisa social branca, gravata borboleta e sapatos de couro polido. A atenção aos detalhes, como abotoaduras e um lenço de bolso, fará toda a diferença.' },
    { title: 'Reunião de Negócios / Escritório', content: 'O vestuário profissional deve transmitir confiança. Um terno de corte impecável em tons de azul marinho ou cinza é versátil e elegante. A camisa social, lisa ou com uma risca discreta, é a base. Para um toque moderno, use um blazer com uma calça de alfaiataria em tom diferente, ou substitua o sapato por um *monk strap* de qualidade.' },
    { title: 'Encontro Casual / Almoço', content: 'Elegância não significa rigidez. Um *look* casual refinado pode incluir uma camisa polo de malha fina, uma calça *chino* bem ajustada e um tênis de couro branco minimalista. Um blazer desestruturado ou uma jaqueta de camurça adicionam uma camada de estilo sem sacrificar o conforto. A chave é a qualidade dos tecidos e o caimento das peças.' },
  ];

  // Esta função é chamada quando o usuário clica em um item do acordeão.
  toggleAccordion(index: number) {
    // Se o item clicado já estiver aberto, fechamos (setando para null).
    // Se não, abrimos o item clicado (setando para o seu index).
    this.activeAccordionIndex.set(this.activeAccordionIndex() === index ? null : index);
  }
}