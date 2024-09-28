import { Injectable } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  opcao: string[];
  correctAnswer: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      question: 'Qual é o símbolo químico do elemento Oxigênio?',
      options: ['O', 'O2', 'H2O', 'C'],
      opcao: ['opção 1', 'opção 2', 'opcap 3', 'opcao 4'],
      correctAnswer: 'O',
      message:'O Oxigênio é representado pelo símbolo "O" na tabela periódica. Este símbolo é usado universalmente para identificar o elemento Oxigênio em reações químicas e fórmulas. Ele não deve ser confundido com "O2", que é a molécula de oxigênio, composta por dois átomos de Oxigênio, como o que respiramos.'
    },
    {
      question: 'Qual é o estado físico da água em temperatura ambiente?',
      options: ['Sólido', 'Líquido', 'Gasoso', 'Plasma'],
      opcao: ['opção 1', 'opção 2', 'opcap 3', 'opcao 4'],
      correctAnswer: 'Líquido',
      message: 'A água, à temperatura ambiente (cerca de 20 a 25 graus Celsius), encontra-se no estado líquido. Em temperaturas mais baixas, ela pode congelar e se transformar em gelo (sólido), e em temperaturas mais altas, ela pode evaporar e se transformar em vapor (gasoso).'
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(newQuestion: Question): void {
    this.questions.push(newQuestion);
  }
}
