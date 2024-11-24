import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import Project from '../../model/project';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'projects-root',
  standalone: true,
  imports: [TableModule, CommonModule],
  providers: [ProjectsService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  onRowClick(projectId: number): void {
    console.log('Row clicked', projectId);
    this.router.navigate(['/project', projectId], {
      queryParams: { ref: 'homepage' },
    });
  }
}
