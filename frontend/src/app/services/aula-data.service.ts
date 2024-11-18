// aula-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AulaDataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // CRUD para Aulas

  // Obter todas as aulas
  getAulas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aulas`);
  }

  // Obter uma aula pelo ID
  getAulaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/aulas/${id}`);
  }

  // Criar uma nova aula
  createAula(aula: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/aulas`, aula);
  }

  // Atualizar uma aula existente
  updateAula(id: number, aula: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/aulas/${id}`, aula);
  }

  // Deletar uma aula
  deleteAula(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/aulas/${id}`);
  }
}
