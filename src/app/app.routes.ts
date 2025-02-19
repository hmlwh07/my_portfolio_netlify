import { Routes } from '@angular/router';
import { AboutComponent } from './pages/parent-components/about/about.component';
import { ContactComponent } from './pages/parent-components/contact/contact.component';
import { HomeComponent } from './pages/parent-components/home/home.component';
import { MiniGamesComponent } from './pages/parent-components/mini-games/mini-games.component';
import { SkillsComponent } from './pages/parent-components/skills/skills.component';
import { StartGameComponent } from './pages/child-components/start-game/start-game.component';
import { GameViewComponent } from './pages/child-components/game-view/game-view.component';
import { GameModesComponent } from './pages/child-components/game-modes/game-modes.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'mini-games', component: MiniGamesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'start-game', component: StartGameComponent },
    { path: 'game-view', component: GameViewComponent },
    { path: 'game-modes', component: GameModesComponent },
];
