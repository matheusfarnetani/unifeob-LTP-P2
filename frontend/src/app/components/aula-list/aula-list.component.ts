// aula-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AulaDataService } from '../../services/aula-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AulaListComponent implements OnInit {
  aulas: any[] = [];

  constructor(
    private aulaDataService: AulaDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAulas();
  }

  getAulas(): void {
    this.aulaDataService.getAulas().subscribe(
      (data: any[]) => {
        this.aulas = data;
      },
      (error) => {
        console.error('Erro ao carregar aulas:', error);
      }
    );
  }

  deleteAula(id: number): void {
    if (confirm('Tem certeza que deseja deletar esta aula?')) {
      this.aulaDataService.deleteAula(id).subscribe(
        () => {
          this.getAulas();
        },
        (error) => {
          console.error('Erro ao deletar aula:', error);
        }
      );
    }
  }

  editAula(id: number): void {
    this.router.navigate(['/aula-form', id]);
  }

  addAula(): void {
    this.router.navigate(['/aula-form']);
  }
  
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
