import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha',
  standalone: true,
  imports: [],
  templateUrl: './escolha.component.html',
  styleUrl: './escolha.component.scss'
})
export class EscolhaComponent {

  constructor(private router: Router) {}

  onCreate(){
    this.router.navigate(['/indicate']);
  }

  onQuiz(){
  this.router.navigate(['/player']);
  }
}
