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
      question: 'Qual é a menor unidade de um elemento químico que mantém suas propriedades?',
      options: ['Molécula', 'Átomo', 'Elétron', 'Neutrino'],
      correctAnswer: 'Átomo',
      message:''
    },
    {
      question: 'Qual dos seguintes é um exemplo de uma mistura aquosa?',
      options: ['Água e óleo', 'Areia e sal', 'Água com sal dissolvido', 'Ferro e enxofre'],
      correctAnswer: 'Água com sal dissolvido',
      message: ''
    },
    {
      question: 'Qual das alternativas abaixo representa uma mudança física, e não química?',
      options: ['Queima de papel', 'Fermentação de uva', 'Dissolução de açúcar em água', 'Oxidação de ferro'],
      correctAnswer: 'Dissolução de açúcar em água',
      message: ''
    },
    {
      question: 'Qual partícula subatômica possui carga negativa?',
      options: ['Próton', 'Nêutron', 'Elétron', 'Quark'],
      correctAnswer: 'Elétron',
      message: ''
    },
    {
      question: 'Qual é a unidade de medida da quantidade de matéria no Sistema Internacional (SI)?',
      options: ['Mol', 'Grama', 'Metro', 'Litro'],
      correctAnswer: 'Mol',
      message: ''
    },
    {
      question: 'Qual das alternativas abaixo é um exemplo de uma substância pura?',
      options: ['Ar', 'Água destilada', 'Água do mar', 'Areia'],
      correctAnswer: 'Água destilada',
      message: ''
    },
    {
      question: 'Quantos átomos de hidrogênio estão presentes em uma molécula de água (H₂O)?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '2',
      message: ''
    },
    {
      question: 'Qual das alternativas abaixo representa uma propriedade química?',
      options: ['Cor', 'Densidade', 'Ponto de fusão', 'Inflamabilidade'],
      correctAnswer: 'Densidade',
      message: ''
    },
    {
      question: 'Qual é o principal gás responsável pelo efeito estufa?',
      options: ['Oxigênio', 'Hidrogênio', 'Gás carbônico', 'Hélio'],
      correctAnswer: 'Gás carbônico',
      message: ''
    },
    {
      question: 'Qual das alternativas é uma propriedade dos metais?',
      options: ['São isolantes térmicos', 'São maleáveis e condutores de eletricidade', 'São quebradiços e isolantes elétricos', 'Têm baixa densidade'],
      correctAnswer: 'São maleáveis e condutores de eletricidade',
      message: ''
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(newQuestion: Question): void {
    this.questions.push(newQuestion);
  }
}
