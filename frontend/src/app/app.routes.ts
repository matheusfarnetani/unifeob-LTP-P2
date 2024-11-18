// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/index/index.component').then(
        (m) => m.IndexComponent
      ),
  },
  {
    path: 'professores',
    loadComponent: () =>
      import('./components/professor-list/professor-list.component').then(
        (m) => m.ProfessorListComponent
      ),
  },
  {
    path: 'professor-form',
    loadComponent: () =>
      import('./components/professor-form/professor-form.component').then(
        (m) => m.ProfessorFormComponent
      ),
  },
  {
    path: 'professor-form/:id',
    loadComponent: () =>
      import('./components/professor-form/professor-form.component').then(
        (m) => m.ProfessorFormComponent
      ),
  },
  {
    path: 'aulas',
    loadComponent: () =>
      import('./components/aula-list/aula-list.component').then(
        (m) => m.AulaListComponent
      ),
  },
  {
    path: 'aula-form',
    loadComponent: () =>
      import('./components/aula-form/aula-form.component').then(
        (m) => m.AulaFormComponent
      ),
  },
  {
    path: 'aula-form/:id',
    loadComponent: () =>
      import('./components/aula-form/aula-form.component').then(
        (m) => m.AulaFormComponent
      ),
  },
  {
    path: 'alunos',
    loadComponent: () =>
      import('./components/aluno-list/aluno-list.component').then(
        (m) => m.AlunoListComponent
      ),
  },
  {
    path: 'aluno-form',
    loadComponent: () =>
      import('./components/aluno-form/aluno-form.component').then(
        (m) => m.AlunoFormComponent
      ),
  },
  {
    path: 'aluno-form/:id',
    loadComponent: () =>
      import('./components/aluno-form/aluno-form.component').then(
        (m) => m.AlunoFormComponent
      ),
  },
  {
    path: 'matriculas',
    loadComponent: () =>
      import('./components/matricula-list/matricula-list.component').then(
        (m) => m.MatriculaListComponent
      ),
  },
  {
    path: 'matricula-form',
    loadComponent: () =>
      import('./components/matricula-form/matricula-form.component').then(
        (m) => m.MatriculaFormComponent
      ),
  },
  {
    path: 'matricula-form/:id',
    loadComponent: () =>
      import('./components/matricula-form/matricula-form.component').then(
        (m) => m.MatriculaFormComponent
      ),
  },
];
