import { Component, OnInit } from '@angular/core';
import Project from '../../model/project';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-root',
  standalone: true,
  providers: [ProjectsService],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectId: string | null = '';
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id'); // 'id' ist der Name des Path-Parameters
      this.project = this.projectsService
        .getProjects()
        .find((p) => p.id === this.projectId);
    });
  }
}
