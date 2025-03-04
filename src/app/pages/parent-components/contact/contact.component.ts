import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isActive = false;

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Check if current route is contact
      this.isActive = event.url === '/contact';
    });
  }

  ngOnInit() {
    // Check initial route
    this.isActive = this.router.url === '/contact';
  }

  copyText(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id ${elementId} not found`);
      return;
    }

    const textToCopy = element.textContent;
    if (!textToCopy) {
      console.error('No text content found to copy');
      return;
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        const feedbackElement = document.getElementById('feedback');
        if (feedbackElement) {
          feedbackElement.textContent = `${textToCopy} copied to clipboard!`;
          // Optional: Clear the feedback after a few seconds
          setTimeout(() => {
            feedbackElement.textContent = '';
          }, 3000);
        }
      })
      .catch((error: any) => {
        console.error('Failed to copy:', error);
        const feedbackElement = document.getElementById('feedback');
        if (feedbackElement) {
          feedbackElement.textContent = 'Failed to copy text.';
        }
      });
  }

}
