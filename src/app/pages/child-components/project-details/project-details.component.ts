import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  project: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.project = history.state.project;
  }

  goBack() {
    this.router.navigate(['home'],{
      replaceUrl: true
    })
  }
}
