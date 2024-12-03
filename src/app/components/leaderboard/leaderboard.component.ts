import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../service/leaderboard/leaderboard.service';
import { CommonModule } from '@angular/common';
import { Score } from '../../models/leaderboard.model';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit{
  scores: Score[] = [];  // Lista de pontuações
  sortedScores: Score[] = [];  // Lista de pontuações ordenadas
  currentPlayerScore: Score | undefined;  // Pontuação do jogador atual

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    // Pega as pontuações do serviço
    this.scores = this.leaderboardService.getScores();
    // Ordena as pontuações de forma decrescente
    this.sortedScores = [...this.scores].sort((a, b) => b.score - a.score);

    // Busca a pontuação do jogador atual
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
      this.currentPlayerScore = this.scores.find(score => score.playerName === playerName);
    }
  }
}