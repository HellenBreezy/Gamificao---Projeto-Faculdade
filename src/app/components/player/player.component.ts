import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  playerName: string = '';

  constructor(private router: Router) {}

  onClick(): void {
    if (this.playerName.trim()) {
      localStorage.setItem('playerName', this.playerName);
      this.router.navigate(['/quiz']);
    } else {
      alert('Por favor, insira seu nome.');
    }
  }
}
