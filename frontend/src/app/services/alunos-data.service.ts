// alunos-data.service.ts
// Este arquivo implementa todas as operações CRUD para a entidade 'alunos'.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoDataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // CRUD para Alunos

  // Obter todos os alunos
  getAlunos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alunos`);
  }

  // Obter um aluno pelo ID
  getAlunoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/alunos/${id}`);
  }

  // Criar um novo aluno
  createAluno(aluno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/alunos`, aluno);
  }

  // Atualizar um aluno existente
  updateAluno(id: number, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/alunos/${id}`, aluno);
  }

  // Deletar um aluno
  deleteAluno(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/alunos/${id}`);
  }
}
