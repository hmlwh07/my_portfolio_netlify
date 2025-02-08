import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  copyText(elementId: string): void {
    const textToCopy = (document.getElementById(elementId) as HTMLElement).textContent;

    if (textToCopy) {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Provide feedback on successful copy
        document.getElementById('feedback')!.textContent = `${textToCopy} copied to clipboard!`;
      }).catch((error: any) => {
        // Handle error
        document.getElementById('feedback')!.textContent = `Failed to copy text.`;
      });
    }
  }

}
