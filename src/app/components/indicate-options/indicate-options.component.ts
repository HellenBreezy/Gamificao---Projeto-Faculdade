import { Component } from '@angular/core';
import { QuizService } from '../../service/quiz/quiz.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question } from '../../models/question.model';
import { Router } from '@angular/router';

interface QuizData {
  question: string;
  options: string[];
  correctAnswer: string;
  message: string;
}

@Component({
  selector: 'app-indicate-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './indicate-options.component.html',
  styleUrl: './indicate-options.component.scss'
})
export class IndicateOptionsComponent {
  quizData: QuizData = {
    question: '',
    options: ['','','',''],
    correctAnswer: '',
    message:''
  };

  quizQuestions: QuizData[] = [];

  constructor(
    private quizService: QuizService,
    private router: Router){}

    onSubmit() {
      // Adiciona a pergunta ao array de perguntas
      this.quizQuestions.push({ ...this.quizData });
  
      // Reseta o formulário para a próxima entrada
      this.quizData = {
        question: '',
        options: ['', '', '', ''], // Reseta as opções
        correctAnswer: '',
        message: '',
      };
  
      // Verifica se o usuário já inseriu 4 perguntas
      if (this.quizQuestions.length >= 4) {
        // Salva as perguntas e redireciona para o quiz
        localStorage.setItem('quizQuestions', JSON.stringify(this.quizQuestions));
        this.router.navigate(['/quiz']); // Redireciona para a página do quiz
      }
    }
}
