import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../model/tecnico';


@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`/tecnicos`);
  }
}
