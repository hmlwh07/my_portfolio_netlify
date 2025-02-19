import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
randomColor(): string {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

generateRandomColors(colorBox: number): string[] {
  const rgbArray: string[] = [];

  for (let i = 0; i < colorBox; i++) {
    rgbArray.push(this.randomColor());
  }

  return rgbArray;
}

colorArrayToInteger(color: string): { red: number; green: number; blue: number } | null {
  let rgbArray = color.match(/\d+/g);

  if (rgbArray === null || rgbArray.length !== 3) {
    return null; // Handle invalid color format
  }

  return {
    red: parseInt(rgbArray[0]),
    green: parseInt(rgbArray[1]),
    blue: parseInt(rgbArray[2])
  };
}

  checkColor(color1: string, color2: string) {
    
    if (!color1 || !color2) {
      return false;
    }

    const rgb1 = this.colorArrayToInteger(color1);
    const rgb2 = this.colorArrayToInteger(color2);

    return rgb1?.red === rgb1?.red && rgb1?.green === rgb2?.green && rgb1?.blue === rgb2?.blue;
    
  }


}
