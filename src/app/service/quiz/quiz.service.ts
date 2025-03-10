import { Injectable } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      question: 'Qual é a unidade de medida da velocidade?',
      options: ['Metro (m)', 'Segundo (s)', 'Metro por segundo (m/s)', 'Joule (J)'],
      correctAnswer: 'Metro por segundo (m/s)',
      message: 'Velocidade mede a variação da posição no tempo, e sua unidade no SI é m/s.'
    },
    {
      question: 'O que é uma força?',
      options: [
        'Uma quantidade que causa aceleração em um objeto.',
        'A velocidade de um objeto.',
        'A quantidade de movimento de um objeto.',
        'A energia cinética de um objeto.'
      ],
      correctAnswer: 'Uma quantidade que causa aceleração em um objeto.',
      message: 'Força é o que faz um objeto acelerar ou mudar seu movimento.'
    },
    {
      question: 'O que é a Lei de Newton da Ação e Reação?',
      options: [
        'Para toda ação, há uma reação de igual intensidade e direção, mas em sentido oposto.',
        'A aceleração de um corpo é diretamente proporcional à força que nele age.',
        'A força de atrito é sempre maior que a força aplicada.',
        'A força de gravidade atrai todos os corpos igualmente.'
      ],
      correctAnswer: 'Para toda ação, há uma reação de igual intensidade e direção, mas em sentido oposto.',
      message: 'Quando um objeto exerce força sobre outro, este reage com força igual e oposta.'
    },
    {
      question: 'Qual é a fórmula da aceleração média?',
      options: ['a = v² - v₀²', 'a = (v - v₀) / t', 'a = m / F', 'a = F / m'],
      correctAnswer: 'a = (v - v₀) / t',
      message: 'A aceleração média é a variação da velocidade dividida pelo tempo.'
    },
    {
      question: 'O que significa a palavra "energia"?',
      options: [
        'A capacidade de um corpo realizar trabalho.',
        'A quantidade de movimento de um corpo.',
        'A força que atua sobre um corpo.',
        'A massa de um corpo.'
      ],
      correctAnswer: 'A capacidade de um corpo realizar trabalho.',
      message: 'Energia é o que permite que algo realize trabalho ou cause mudanças.'
    },
    {
      question: 'Qual é a fórmula da força gravitacional de atração entre dois corpos?',
      options: ['F = m * g', 'F = G * (m₁ * m₂) / r²', 'F = m * a', 'F = m / a'],
      correctAnswer: 'F = G * (m₁ * m₂) / r²',
      message: 'A gravidade depende da massa dos corpos e da distância entre eles.'
    },
    {
      question: 'Qual é a principal característica de um movimento uniforme?',
      options: ['A aceleração é constante.', 'A velocidade é constante.', 'A velocidade aumenta constantemente.', 'A força é constante.'],
      correctAnswer: 'A velocidade é constante.',
      message: 'No movimento uniforme, a velocidade não muda com o tempo.'
    },
    {
      question: 'A luz branca é composta por:',
      options: ['Apenas luz vermelha.', 'Apenas luz azul.', 'Uma mistura de luzes de diferentes cores.', 'Nenhuma cor de luz.'],
      correctAnswer: 'Uma mistura de luzes de diferentes cores.',
      message: 'A luz branca é a soma de todas as cores do espectro visível.'
    },
    {
      question: 'Quando um corpo está em queda livre, qual força está agindo sobre ele?',
      options: ['Força centrípeta.', 'Força de atrito.', 'Força gravitacional.', 'Força de resistência do ar.'],
      correctAnswer: 'Força gravitacional.',
      message: 'Na queda livre, apenas a gravidade age sobre o corpo.'
    },
    {
      question: 'O que é o trabalho realizado por uma força?',
      options: [
        'A mudança na posição de um corpo em relação ao tempo.',
        'A quantidade de energia perdida.',
        'A força aplicada em um corpo multiplicada pela distância que o corpo se move na direção da força.',
        'A aceleração que um corpo adquire.'
      ],
      correctAnswer: 'A força aplicada em um corpo multiplicada pela distância que o corpo se move na direção da força.',
      message: 'Trabalho ocorre quando uma força desloca um objeto em sua direção.'
    }
  ];

  private answers: string[] = [];

  getQuestions(): Question[] {
    return this.questions;
  }

  saveAnswer(index: number, answer: string): void {
    this.answers[index] = answer;
  }

  // Retorna as respostas
  getAnswers(): string[] {
    return this.answers;
  }

  addQuestion(newQuestion: Question): void {
    this.questions.push(newQuestion);
  }
}
