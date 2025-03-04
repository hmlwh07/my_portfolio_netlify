import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/parent-components/about/about.component';
import { ContactComponent } from './pages/parent-components/contact/contact.component';
import { HomeComponent } from './pages/parent-components/home/home.component';
import { MiniGamesComponent } from './pages/parent-components/mini-games/mini-games.component';
import { SkillsComponent } from './pages/parent-components/skills/skills.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, HomeComponent, AboutComponent, SkillsComponent, MiniGamesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeSection: string = 'home';
  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'mini-games', name: 'Mini Games' },
    { id: 'contact', name: 'Contact' }
  ];

  constructor(private router: Router) {
    // Get the current route path
    const currentPath = window.location.pathname.substring(1); // Remove leading slash
    if (currentPath && this.sections.some(section => section.id === currentPath)) {
      this.activeSection = currentPath;
      // Scroll to the correct section after a short delay to ensure DOM is ready
      setTimeout(() => {
        this.scrollToSection(currentPath);
      }, 100);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'skills', 'mini-games', 'contact'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section;
          console.log(section);
          this.router.navigateByUrl(section);
          break;
        }
      }
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = section;
    }
  }

  isGameRoute() {
    return this.router.url === '/start-game' || this.router.url === '/game-view' || this.router.url === '/game-modes';
  }
}
