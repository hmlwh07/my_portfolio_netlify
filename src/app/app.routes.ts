import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MiniGamesComponent } from './mini-games/mini-games.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'mini-games', component: MiniGamesComponent },
    { path: 'contact', component: ContactComponent }
];
