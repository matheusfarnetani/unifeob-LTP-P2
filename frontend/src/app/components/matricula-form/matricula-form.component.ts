// matricula-form.component.ts
import { Component, OnInit } from '@angular/core';
import { MatriculaDataService } from '../../services/matriculas-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matricula-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css'],
})
export class MatriculaFormComponent implements OnInit {
  matricula: any = {
    alunos_id: null,
    aulas_id: null,
  };
  alunos: any[] = [];
  aulas: any[] = [];
  id: number | null = null;

  constructor(
    private matriculaDataService: MatriculaDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.matriculaDataService.getMatriculaById(this.id).subscribe((data) => {
        this.matricula = data;
      });
    }

    // Buscar alunos e aulas para preencher os selects
    this.matriculaDataService.getAlunos().subscribe((data) => {
      this.alunos = data;
    });

    this.matriculaDataService.getAulas().subscribe((data) => {
      this.aulas = data;
    });
  }

  saveMatricula(): void {
    if (!this.matricula.alunos_id || !this.matricula.aulas_id) {
      alert('Por favor, selecione um aluno e uma aula antes de salvar.');
      return;
    }

    const matriculaData = {
      alunos_id: this.matricula.alunos_id,
      aulas_id: this.matricula.aulas_id,
    };

    if (this.id) {
      this.matriculaDataService
        .updateMatricula(this.id, matriculaData)
        .subscribe(() => {
          this.router.navigate(['/matriculas']);
        });
    } else {
      this.matriculaDataService.createMatricula(matriculaData).subscribe(() => {
        this.router.navigate(['/matriculas']);
      });
    }
  }
}
