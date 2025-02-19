import { Component, Renderer2 } from '@angular/core';
import { GameService } from '../../../service/game.service';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-modes',
  imports: [RouterModule, CommonModule],
  templateUrl: './game-modes.component.html',
  styleUrl: './game-modes.component.scss'
})
export class GameModesComponent {

  randomColors: string[] = [];
  showColor!: string;
  colorMatch: boolean | null = null;
  mode: string = 'easy';
  choices: number = 3;

  constructor(private service: GameService,private renderer:Renderer2, private location: Location) {
  }

  ngOnInit(){
    this.mode = history.state.mode;
    if(this.mode === 'easy'){
      this.choices = 3;
    } else if (this.mode === 'normal'){
      this.choices = 6;
    } else {
      this.choices = 9;
    }
    if(this.choices){
      this.gameStart();
    }
  }

  gameStart(){
    this.randomColors = this.service.generateRandomColors(this.choices);
    this.showColor = this.randomColors[Math.floor(Math.random() * this.choices)];
    console.log(this.showColor);
    console.log(this.randomColors);
    this.colorMatch = null;
  }

  checkIfCorrect(color:string, event:MouseEvent){
    const colorElement = event.target as HTMLElement;

    if(color){
      this.colorMatch = this.service.checkColor(color,this.showColor);

      if (!this.colorMatch) {
        this.renderer.setStyle(colorElement, 'background' , 'transparent');
        setTimeout(() => {
          if (this.colorMatch === false) {
            this.colorMatch = null;
          }
        }, 1000);
      }
    } else {
      this.colorMatch = null;
    }
  }

  goBack(){
    this.location.back();
  }

}
