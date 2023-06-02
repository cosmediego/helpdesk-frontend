import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Chamado> {
    return this.http.get<Chamado>(`/chamados/${id}`);
  }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`/chamados`);
  }

  create(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`/chamados`, chamado);
  }

  update(chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`/chamados/${chamado.id}`, chamado);
  }
}
