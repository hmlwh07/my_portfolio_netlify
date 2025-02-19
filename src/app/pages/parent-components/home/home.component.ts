import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  imgUrl = `../../assets/images/my_pf.jpeg`;
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/my_cv.pdf';
    link.download = 'Hayman_Lawon_Htet_CV.pdf';
    link.click();
  }

}
