import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getMatricula(id: number) {
    return this.http.get<Matricula>(`/api/matriculas/${id}`)
  }

  addMatricula(matricula: Matricula) {
    const header = new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("Authorization")}`})
    return this.http.post('/api/matriculas/', matricula, {headers: header})
  }

  editMatricula(matricula: Matricula) {
    const token = localStorage.getItem("Authorization")
    const temp = {"Authorization": `Bearer ${token}`}
    const header = new HttpHeaders(temp)
    return this.http.put<Matricula>(`/api/matriculas/${matricula.id}`, matricula, {headers: header});
  }

  deleteMatricula(id: number) {
    // const token = 
    // const temp = 
    const header = new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("Authorization")}`})
    return this.http.delete(`/api/matriculas/${id}`, {headers: header})
  }

}
