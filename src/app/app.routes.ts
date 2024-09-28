import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PlayerComponent } from './components/player/player.component';
import { IndicateOptionsComponent } from './components/indicate-options/indicate-options.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'indicate', component: IndicateOptionsComponent},
    { path: 'player', component: PlayerComponent},
    { path: 'quiz', component: QuizComponent},
    { path: 'leaderboard', component: LeaderboardComponent},
    { path: 'feedback', component: FeedbackComponent},
];
