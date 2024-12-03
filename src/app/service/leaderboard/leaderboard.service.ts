import { Injectable } from '@angular/core';
import { Score } from '../../models/leaderboard.model';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private localStorageKey = 'leaderboardScores'; // Chave para armazenar as pontuações no localStorage

  constructor() {}

  // Adiciona uma nova pontuação à lista
  addScore(playerName: string, score: number): void {
    // Obtém as pontuações atuais do localStorage
    const scores = this.getScores();
    // Adiciona a nova pontuação à lista
    scores.push({ playerName, score });
    // Salva as pontuações de volta no localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(scores));
  }

  // Retorna a lista de pontuações armazenadas no localStorage
  getScores(): Score[] {
    const storedScores = localStorage.getItem(this.localStorageKey);
    // Retorna as pontuações se existirem, ou um array vazio caso contrário
    return storedScores ? JSON.parse(storedScores) : [];
  }
}
