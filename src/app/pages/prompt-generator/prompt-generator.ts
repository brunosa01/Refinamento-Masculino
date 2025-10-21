import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-generator.html',
  styleUrl: './prompt-generator.scss'
})
export class PromptGenerator {
  // --- DADOS PARA OS MENUS DE SELEÇÃO ---
  photoStyles = [
    'Retrato de meio-corpo, foco nítido nos detalhes do tecido',
    'Fotografia profissional de alta qualidade, estilo fashion editorial',
    'Foto de corpo inteiro, estilo cinematográfico',
    'Retrato em estúdio, preto e branco (Monocromático)',
    'Retrato casual, candid shot'
  ];
  lightingStyles = [
    'Iluminação cinematic suave. Cores e mood: Tons ricos em azul e cinza, atmosfera de confiança.',
    'Luz baixa e dramática (Chiaroscuro). Cores e mood: Tons escuros e misteriosos, alto contraste.',
    'Luz suave de janela (High Key). Cores e mood: Elegância limpa e arejada.',
    'Iluminação da hora dourada. Cores e mood: Tons quentes e nostálgicos.',
    'Luz de neon sutil. Cores e mood: Urbano e moderno.'
  ];
  techSpecs = [
    'Câmera/Lente: Filmada em Sony A7R IV, Lente 85mm f/1.4. Detalhes: Foco nítido, profundidade de campo rasa (bokeh), resolução 8K.',
    'Câmera/Lente: Filmada em Leica M11, Lente 50mm f/1.2. Detalhes: Textura de grão de filme, resolução 8K.',
    'Câmera/Lente: Filmada em Hasselblad H6D, Lente 100mm. Detalhes: Hiper-realista, clareza máxima, resolução 8K.'
  ];

  // --- GERENCIAMENTO DE ESTADO (SIGNALS) ---
  promptInputs = signal({
    clothing: 'um terno de lã fria azul marinho, corte slim fit, com colete e gravata borboleta de seda',
    scenario: 'Parede de tijolos escuros em um estúdio de alfaiataria',
    action: 'De pé, posição ereta e confiante, olhando para a frente',
    photoStyle: this.photoStyles[0],
    lighting: this.lightingStyles[0],
    techSpecs: this.techSpecs[0]
  });

  isCopied = signal(false);
  copyMessage = computed(() => this.isCopied() ? 'Copiado!' : 'Copiar Prompt');

  finalPrompt = computed(() => {
    const p = this.promptInputs();
    const baseStart = "Retrato de um cavalheiro elegante e sofisticado, com as características físicas originais do modelo (rosto, corpo, cabelo) mantidas com precisão. O modelo está vestindo: ";
    const parts = [
      baseStart + p.clothing.trim(),
      ". Cenário de fundo: " + p.scenario.trim(),
      ". Posição e ação: " + p.action.trim(),
      ". " + p.photoStyle,
      ". " + p.lighting,
      ". " + p.techSpecs
    ];
    return parts.join('');
  });

  // --- FUNÇÕES DE INTERAÇÃO ---
  updatePromptInput(key: keyof ReturnType<this['promptInputs']>, value: string) {
    this.promptInputs.update(p => ({ ...p, [key]: value }));
  }

  copyPrompt() {
    navigator.clipboard.writeText(this.finalPrompt()).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2000);
    });
  }
}