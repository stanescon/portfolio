import { ProjectsInfoService } from './../../services/projects-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsInformation: any[] = []

  constructor(
    private projectsInfo: ProjectsInfoService
  ) { }

  ngOnInit(): void {
    this.projectsInformation = this.projectsInfo.projects
  }

}
