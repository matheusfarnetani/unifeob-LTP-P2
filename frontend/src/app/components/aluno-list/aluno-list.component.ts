// aluno-list.component.ts
// Componente para listar todos os alunos e permitir operações CRUD
import { Component, OnInit } from '@angular/core';
import { AlunoDataService } from '../../services/alunos-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AlunoListComponent implements OnInit {
  alunos: any[] = [];

  constructor(
    private alunoDataService: AlunoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoDataService.getAlunos().subscribe(
      (data: any[]) => {
        this.alunos = data;
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
      }
    );
  }

  deleteAluno(id: number): void {
    if (confirm('Tem certeza que deseja deletar este aluno?')) {
      this.alunoDataService.deleteAluno(id).subscribe(
        () => {
          this.getAlunos();
        },
        (error) => {
          console.error('Erro ao deletar aluno:', error);
        }
      );
    }
  }

  editAluno(id: number): void {
    this.router.navigate(['/aluno-form', id]);
  }

  addAluno(): void {
    this.router.navigate(['/aluno-form']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
