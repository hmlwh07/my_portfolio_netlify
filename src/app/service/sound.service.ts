import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SoundService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio("src/assets/music/click-button-140881.mp3");
  }

  clickSoundEffect(): void {
    this.audio.currentTime = 0; // Reset to the beginning
    // this.audio.play();
  }
}
