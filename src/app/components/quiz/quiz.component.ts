import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule para usar ngModel
import { RouterModule } from '@angular/router'; // Import RouterModule para o roteamento
import { CommonModule } from '@angular/common'; // Importar CommonModule para uso geral
import { QuizService } from '../../service/quiz/quiz.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  questions: Question[] = []; // Defina o tipo correto para questions
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = '';
  playerName: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.playerName = localStorage.getItem('playerName') || 'Desconhecido';
  }

  checkAnswer(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.selectedAnswer === currentQuestion.correctAnswer) {
      this.score++;
      alert('Resposta correta!');
    } else {
      alert('Resposta incorreta. Tente novamente.');
    }

    this.selectedAnswer = '';
    this.currentQuestionIndex++;
  }

  selectAnswer(option: string): void {
    this.selectedAnswer = option;
  }
}
