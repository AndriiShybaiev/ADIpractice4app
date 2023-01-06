import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrato } from './contratos';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  contratoList: Contrato[] = []
  header = new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("Authorization")}`})

  constructor(private http:HttpClient) { }

  getContratos() {
    return this.http.get<Contrato[]>('/api/contratos', {headers: this.header});
  }

  getContrato(id: number) {
    return this.http.get<Contrato>(`/api/contratos/${id}`, {headers: this.header})
  }

  addContrato(contrato: Contrato) {
    return this.http.post('/api/contratos', contrato, {headers: this.header})
  }

  editContrato(contrato: Contrato) {
    return this.http.put<Contrato>(`/api/contratos/${contrato.id}`, contrato, {headers: this.header});
  }

  deleteContrato(id: number) {
    return this.http.delete(`/api/contratos/${id}`, {headers: this.header})
  }
}
