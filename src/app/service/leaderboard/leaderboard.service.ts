import { Injectable } from '@angular/core';
import { Score } from '../../models/leaderboard.model';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private scores: Score[] = [];

  // Adiciona uma nova pontuação à lista
  addScore(playerName: string, score: number) {
    this.scores.push({ playerName, score });
  }
  

  // Retorna a lista de pontuações
  getScores(): Score[] {
    return this.scores;
  }
}
