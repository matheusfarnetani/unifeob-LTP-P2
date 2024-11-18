// professor-form.component.ts
// Componente para criar ou editar um professor
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/professor-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css'],
})
export class ProfessorFormComponent implements OnInit {
  professor: any = {
    nome: '',
    disciplina: '',
    email: '',
  };
  id: number | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.dataService.getProfessorById(this.id).subscribe((data) => {
        this.professor = data;
      });
    }
  }

  saveProfessor(): void {
    const professorData = {
      nome: this.professor.nome,
      disciplina: this.professor.disciplina,
      email: this.professor.email,
    };

    if (this.id) {
      this.dataService.updateProfessor(this.id, professorData).subscribe(() => {
        this.router.navigate(['/professores']);
      });
    } else {
      this.dataService.createProfessor(professorData).subscribe(() => {
        this.router.navigate(['/professores']);
      });
    }
  }
}
