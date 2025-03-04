import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  imgUrl = `../../assets/images/my_pf.jpeg`;
  isActive = false;

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Check if current route is home
      this.isActive = event.url === '/home';
    });
  }

  ngOnInit() {
    // Check initial route
    this.isActive = this.router.url === '/home';
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/HaymanLawonHtet-AngularDeveloper.pdf';
    link.download = 'HaymanLawonHtet-AngularDeveloper.pdf';
    link.click();
  }

}
