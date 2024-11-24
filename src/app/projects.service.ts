import { Injectable } from '@angular/core';
import Project from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private data: Project[] = [
    {
      id: '1',
      name: 'Projekt 1',
      description: 'Das ist das erste Projekt',
      completed: false,
    },
    {
      id: '2',
      name: 'Projekt 2',
      description: 'Das ist das zweite Projekt',
      completed: false,
    },
    {
      id: '3',
      name: 'Projekt 3',
      description: 'Das ist das dritte Projekt',
      completed: true,
    },
  ];

  constructor() {}

  // Methode zum Abrufen von Daten
  getProjects(): Project[] {
    return this.data;
  }
}
