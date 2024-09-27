import { Injectable } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      question: 'Qual é o símbolo químico do elemento Oxigênio?',
      options: ['O', 'O2', 'H2O', 'C'],
      correctAnswer: 'O'
    },
    {
      question: 'Qual é o estado físico da água em temperatura ambiente?',
      options: ['Sólido', 'Líquido', 'Gasoso', 'Plasma'],
      correctAnswer: 'Líquido'
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
