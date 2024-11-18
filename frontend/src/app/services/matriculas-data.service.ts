// matriculas-data.service.ts
// Este arquivo implementa todas as operações CRUD para a entidade 'matriculas'.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatriculaDataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // CRUD para Matrículas

  // Obter todas as matrículas
  getMatriculas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matriculas`);
  }

  // Obter uma matrícula pelo ID
  getMatriculaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/matriculas/${id}`);
  }

  // Criar uma nova matrícula
  createMatricula(matricula: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/matriculas`, matricula);
  }

  // Atualizar uma matrícula existente
  updateMatricula(id: number, matricula: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/matriculas/${id}`, matricula);
  }

  // Deletar uma matrícula
  deleteMatricula(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/matriculas/${id}`);
  }

  // Obter todos os alunos
  getAlunos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alunos`);
  }

  // Obter todas as aulas
  getAulas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aulas`);
  }
}
