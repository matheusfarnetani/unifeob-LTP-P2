// professor-list.component.ts
// Componente para listar todos os professores e permitir operações CRUD
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/professor-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProfessorListComponent implements OnInit {
  professores: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getProfessores();
  }

  getProfessores(): void {
    this.dataService.getProfessores().subscribe(
      (data: any[]) => {
        this.professores = data;
      },
      (error) => {
        console.error('Erro ao carregar professores:', error);
      }
    );
  }

  deleteProfessor(id: number): void {
    if (confirm('Tem certeza que deseja deletar este professor?')) {
      this.dataService.deleteProfessor(id).subscribe(
        () => {
          this.getProfessores();
        },
        (error) => {
          console.error('Erro ao deletar professor:', error);
        }
      );
    }
  }

  editProfessor(id: number): void {
    this.router.navigate(['/professor-form', id]);
  }

  addProfessor(): void {
    this.router.navigate(['/professor-form']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
