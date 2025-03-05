import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-view',
  imports: [],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss'
})
export class GameViewComponent {

  constructor(private router: Router) {
  }

  chooseMode(mode: string) {
    event?.preventDefault();
    if(mode === 'home'){
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/game-modes'], { state: { mode } });
    }
  }

  goBack(){
    this.router.navigate(['/start-game']);
  }

}