import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule para usar ngModel
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
    
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
  
    // Título
    doc.setFontSize(18);
    doc.text('Resultados do Quiz', 10, yPosition);
    yPosition += 10;  // Adiciona margem inferior para o título
  
    // Nome do usuário
    doc.setFontSize(14);
    doc.text(`Nome do Jogador: ${this.playerName}`, 10, yPosition);
    yPosition += 10;  // Adiciona espaço após o nome do jogador
  
    questions.forEach((question, index) => {
      if (yPosition > pageHeight - 30) {
        doc.addPage(); // Adiciona nova página se estiver perto do limite
        yPosition = 20;
      }
  
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0); // Cor padrão preta
  
      // Quebra de linha automática para a pergunta
      const maxWidth = 180;
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question.question}`, maxWidth);
      
      // Exibe a pergunta com a numeração
      questionLines.forEach((line: string) => {
        doc.text(line, 10, yPosition);
        yPosition += 10;
      });
  
      yPosition += 10; // Espaço entre a pergunta e as opções
  
      question.options.forEach(option => {
        const userSelected = answers[index] === option;
        const isCorrect = option === question.correctAnswer;
  
        // Se a resposta foi correta, grifa em verde
        if (userSelected && isCorrect) {
          doc.setFillColor(144, 238, 144);  // Verde claro para resposta correta
          doc.rect(10, yPosition - 7, 190, 8, 'F');  // Preenchimento verde
        } 
        // Se a resposta foi errada, destaca em amarelo
        else if (userSelected && !isCorrect) {
          doc.setFillColor(255, 255, 153);  // Amarelo claro para resposta errada
          doc.rect(10, yPosition - 7, 190, 8, 'F');  // Preenchimento amarelo
        }
  
        // Texto da opção
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Cor do texto padrão preta
        doc.text(option, 12, yPosition);  // Escreve a opção
  
        yPosition += 10;  // Ajuste de posição para a próxima linha
      });
  
      yPosition += 5; // Espaço extra entre perguntas
    });
  
    // Pontuação total no final
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
    }
  
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 128); // Azul escuro para o total de pontuação
    doc.text(`Pontuação: ${this.score} de ${questions.length}`, 10, yPosition + 10);
  
    // Salva o PDF
    doc.save('resultados_quiz.pdf');
  }
  
  

}
