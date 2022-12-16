import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from './matriculas';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
  matriculaList: Matricula[] =[]

  constructor(private http:HttpClient) { }

  getMatriculas() {
    return this.http.get<Matricula[]>('/api/matriculas');
  }
}
