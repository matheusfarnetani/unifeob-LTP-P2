// aula-form.component.ts
import { Component, OnInit } from '@angular/core';
import { AulaDataService } from '../../services/aula-data.service';
import { DataService } from '../../services/professor-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aula-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aula-form.component.html',
  styleUrls: ['./aula-form.component.css'],
})
export class AulaFormComponent implements OnInit {
  aula: any = {
    nome: '',
    professorId: '',
  };
  professores: any[] = [];
  id: number | null = null;

  constructor(
    private aulaDataService: AulaDataService,
    private professorDataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.aulaDataService.getAulaById(this.id).subscribe((data) => {
        this.aula = data;
      });
    }

    // Carregar todos os professores para preencher o select
    this.professorDataService.getProfessores().subscribe((data) => {
      this.professores = data;
    });
  }

  saveAula(): void {
    console.log('Salvando aula:', this.aula);

    const aulaData = {
      nome: this.aula.nome,
      professores_id: this.aula.professorId, // Atualizado para "professores_id"
    };

    if (!aulaData.nome || !aulaData.professores_id) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (this.id) {
      this.aulaDataService.updateAula(this.id, aulaData).subscribe(
        () => {
          console.log('Aula atualizada com sucesso.');
          this.router.navigate(['/aulas']);
        },
        (error) => {
          console.error('Erro ao atualizar a aula:', error);
        }
      );
    } else {
      this.aulaDataService.createAula(aulaData).subscribe(
        (response) => {
          console.log('Resposta da API ao criar aula:', response);
          this.router.navigate(['/aulas']);
        },
        (error) => {
          console.error('Erro ao criar a aula:', error);
          console.error('Detalhes do erro:', error.error);
        }
      );
    }
  }
}
