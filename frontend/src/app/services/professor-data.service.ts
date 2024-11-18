// professor-data.service.ts
// Este arquivo implementa todas as operações CRUD para a entidade 'professores'.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // CRUD para Professores

  // Obter todos os professores
  getProfessores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/professores`);
  }

  // Obter um professor pelo ID
  getProfessorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/professores/${id}`);
  }

  // Criar um novo professor
  createProfessor(professor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/professores`, professor);
  }

  // Atualizar um professor existente
  updateProfessor(id: number, professor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/professores/${id}`, professor);
  }

  // Deletar um professor
  deleteProfessor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/professores/${id}`);
  }
}
