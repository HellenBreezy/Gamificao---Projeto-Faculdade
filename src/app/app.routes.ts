import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PlayerComponent } from './components/player/player.component';

export const routes: Routes = [
    { path: '', redirectTo: '/player', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'player', component: PlayerComponent},
    { path: 'quiz', component: QuizComponent},
    { path: 'leaderboard', component: LeaderboardComponent},
    { path: 'feedback', component: FeedbackComponent},
];
