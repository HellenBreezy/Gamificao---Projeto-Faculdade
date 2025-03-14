import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule para usar ngModel
import { RouterModule } from '@angular/router'; // Import RouterModule para o roteamento
import { CommonModule } from '@angular/common'; // Importar CommonModule para uso geral
import { QuizService } from '../../service/quiz/quiz.service';
import { Question } from '../../models/question.model';
import { ModalComponent } from '../../shared/modal/modal.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, ModalComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  questions: Question[] = []; // Defina o tipo correto para questions
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = '';
  playerName: string = '';
  isVisible: boolean = false;
  response: string = '';
  message: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    const storedQuestions = localStorage.getItem('quizQuestions');
    if (storedQuestions) {
      this.questions = JSON.parse(storedQuestions);
    }
    this.playerName = localStorage.getItem('playerName') || 'Desconhecido';
  }  

  checkAnswer(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.selectedAnswer === currentQuestion.correctAnswer) {
      this.score++;
      this.openModal();
      this.response = currentQuestion.correctAnswer;
      this.message = currentQuestion.message;
    } else {
      this.openModal();
      this.response = currentQuestion.correctAnswer;
      this.message = currentQuestion.message;
    }

    this.selectedAnswer = '';
    this.currentQuestionIndex++;
  }

  reset(){
    localStorage.clear();
  }

  selectAnswer(option: string): void {
    this.selectedAnswer = option;
    this.quizService.saveAnswer(this.currentQuestionIndex, option);
  }

  openModal(){
    this.isVisible = true;
  }

  closeModal(){
    this.isVisible = false;
  }
  
  generatePDF() {
    const doc = new jsPDF();
    const questions = this.quizService.getQuestions();
    const answers = this.quizService.getAnswers();
  
    const levelSelected = localStorage.getItem('level');

    const filteredQuestions = questions.filter(question => question.level === Number(levelSelected));
  
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
  
    // Título
    doc.setFontSize(18);
    doc.text('Resultados do Quiz', 10, yPosition);
    yPosition += 10;
  
    // Nome do usuário
    doc.setFontSize(14);
    doc.text(`Nome do Jogador: ${this.playerName}`, 10, yPosition);
    yPosition += 10;
  
    filteredQuestions.forEach((question, index) => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }
  
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
  
      const maxWidth = 180;
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question.question}`, maxWidth);
  
      questionLines.forEach((line: string) => {
        doc.text(line, 10, yPosition);
        yPosition += 10;
      });
  
      yPosition += 10;
  
      question.options.forEach(option => {
        const userSelected = answers[index] === option;
        const isCorrect = option === question.correctAnswer;
  
        if (userSelected && isCorrect) {
          doc.setFillColor(144, 238, 144);
          doc.rect(10, yPosition - 7, 190, 8, 'F');
        } else if (userSelected && !isCorrect) {
          doc.setFillColor(255, 255, 153);
          doc.rect(10, yPosition - 7, 190, 8, 'F');
        }
  
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(option, 12, yPosition);
  
        yPosition += 10;
      });
  
      yPosition += 5;
    });
  
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }
  
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 128);
    doc.text(`Pontuação: ${this.score} de ${filteredQuestions.length}`, 10, yPosition + 10);
  
    doc.save('resultados_quiz.pdf');
  }
  
  
  getQuestionLevel(question: Question): number {
    if(question.level === 1){
      return 1;
    } else if (question.level === 2){
      return 2;
    } else{
      return 3;
    }
  }

}
