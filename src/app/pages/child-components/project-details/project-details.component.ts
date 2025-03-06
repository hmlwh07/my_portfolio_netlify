import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  project: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.scrollTo(0, 0);
    this.project = history.state.project;
  }
}
