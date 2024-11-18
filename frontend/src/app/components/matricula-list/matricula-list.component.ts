// matricula-list.component.ts
// Componente para listar todas as matrículas e permitir operações CRUD
import { Component, OnInit } from '@angular/core';
import { MatriculaDataService } from '../../services/matriculas-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrls: ['./matricula-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MatriculaListComponent implements OnInit {
  matriculas: any[] = [];

  constructor(
    private matriculaDataService: MatriculaDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMatriculas();
  }

  getMatriculas(): void {
    this.matriculaDataService.getMatriculas().subscribe(
      (data: any[]) => {
        this.matriculas = data;
      },
      (error) => {
        console.error('Erro ao carregar matrículas:', error);
      }
    );
  }

  deleteMatricula(id: number): void {
    if (confirm('Tem certeza que deseja deletar esta matrícula?')) {
      this.matriculaDataService.deleteMatricula(id).subscribe(
        () => {
          this.getMatriculas();
        },
        (error) => {
          console.error('Erro ao deletar matrícula:', error);
        }
      );
    }
  }

  editMatricula(id: number): void {
    this.router.navigate(['/matricula-form', id]);
  }

  addMatricula(): void {
    this.router.navigate(['/matricula-form']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
