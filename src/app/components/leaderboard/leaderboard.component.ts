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
  scores: Score[] = [];

  get sortedScores(): Score[] {
    return this.scores.sort((a, b) => b.score - a.score);
  }

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.scores = this.leaderboardService.getScores();
  }
}
