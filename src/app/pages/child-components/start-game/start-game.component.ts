import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-start-game',
  imports: [RouterModule],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {

  @ViewChild('backgroundAudio', { static: false }) backgroundAudioRef!: ElementRef<HTMLAudioElement>;
  
  audio: HTMLAudioElement | null = null;

  constructor(private router: Router) {
    
  }

  ngAfterViewInit(): void {
    this.toggleSound(true);
    setTimeout(() => {
      this.initAudio();
    }, 1000); // Delay in milliseconds
  }

  initAudio() {
    this.audio = this.backgroundAudioRef.nativeElement;
    this.audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  toggleSound(play: boolean): void {
    if (this.audio) {
      if (play) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }

  playGame() {
    this.router.navigate(['/game-view'])
  }

  go(route: string) {
    // Remove modal backdrop
    document.querySelector('.modal-backdrop')?.remove();
    // Remove modal-open class from body
    document.body.classList.remove('modal-open');
    // Remove inline styles from body
    document.body.style.removeProperty('padding-right');
    document.body.style.removeProperty('overflow');
    
    // Navigate to home
    this.router.navigate([`/${route}`]);
  }

}
