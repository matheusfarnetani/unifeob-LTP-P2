// aluno-form.component.ts
// Componente para criar ou editar um aluno
import { Component, OnInit } from '@angular/core';
import { AlunoDataService } from '../../services/alunos-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {
    nome: '',
    email: '',
  };
  id: number | null = null;

  constructor(
    private alunoDataService: AlunoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.alunoDataService.getAlunoById(this.id).subscribe((data) => {
        this.aluno = data;
      });
    }
  }

  saveAluno(): void {
    const alunoData = {
      nome: this.aluno.nome,
      email: this.aluno.email,
    };

    if (this.id) {
      this.alunoDataService.updateAluno(this.id, alunoData).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    } else {
      this.alunoDataService.createAluno(alunoData).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    }
  }
}
