import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz/quiz.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-escolha',
  standalone: true,
  imports: [],
  templateUrl: './escolha.component.html',
  styleUrl: './escolha.component.scss'
})
export class EscolhaComponent {
  quizQuestions: Question[] = []; // Tipagem correta para o array

  constructor(private router: Router, private quizService: QuizService) {}

  onCreate() {
    this.router.navigate(['/indicate']);
  }

  useDefaultQuestions() {
      this.quizQuestions = this.quizService.getQuestions().map(q => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      message: q.message
    }));

    // Salva as perguntas padrão no localStorage
    localStorage.setItem('quizQuestions', JSON.stringify(this.quizQuestions));
    
    // Redireciona para a página do quiz
    this.router.navigate(['/quiz']);
  }
}
