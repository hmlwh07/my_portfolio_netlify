import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mini-games',
  imports: [CommonModule,RouterModule],
  templateUrl: './mini-games.component.html',
  styleUrl: './mini-games.component.scss'
})
export class MiniGamesComponent {

  constructor(private router: Router, private route: ActivatedRoute){
  }

  playGame() {
    this.router.navigate(['/start-game'])
      .then(() => {
        console.log('Navigation completed');
      })
      .catch(err => {
        console.error('Navigation failed:', err);
      });
  }

}
