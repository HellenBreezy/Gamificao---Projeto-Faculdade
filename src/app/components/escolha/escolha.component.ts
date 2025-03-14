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

  useDefaultQuestions(level: number) {

    // Filtra as perguntas de acordo com o nível selecionado
    this.quizQuestions = this.quizService.getQuestions().filter(q => q.level === level).map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    message: q.message,
    image: q.image
    }));

    localStorage.setItem('level', JSON.stringify(level));
    // Salva as perguntas padrão no localStorage
    localStorage.setItem('quizQuestions', JSON.stringify(this.quizQuestions));
    
    // Redireciona para a página do quiz
    this.router.navigate(['/quiz']);
  }
}
