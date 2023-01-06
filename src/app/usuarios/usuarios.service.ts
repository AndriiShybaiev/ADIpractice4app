import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarioList : Usuario[] = []
  result : string = '';
  header = new HttpHeaders({"Authorization": `Bearer ${localStorage.getItem("Authorization")}`})

  constructor(private http:HttpClient) { }

  getUsuarios() {
    //const header = new HttpHeaders({"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImFkaSJ9.pHfeE8Zyczq4dVFkD33uTdDSAaaJP_v06DmLfxInMb4"})
    return this.http.get<Usuario[]>('/api/usuarios', {headers: this.header});
  }

  login(login: String, password: String) {
    return this.http.post('/api/login', {login: login, password: password}).subscribe(
      res => {
    this.result = JSON.stringify(res) 
    this.result = this.getToken(this.result)
    localStorage.setItem("Authorization", this.result)
      }, err => {alert(err)})
  }

  getToken(header: String) {
      var data = header.split(" ");
      data[1] = data[1].replace("\"", "")
      data[1] = data[1].replace("}", "")
        return data[1];
      }

  getUsuario(id: number) {
    return this.http.get<Usuario>(`/api/usuarios/${id}`, {headers: this.header})
  }

  addUsuario(usuario: Usuario) {
    return this.http.post('/api/usuarios', usuario, {headers: this.header})
  }

  editUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(`/api/usuarios/${usuario.id}`, usuario, {headers: this.header})
  }

  deleteUsuario(id: number) {
    return this.http.delete(`/api/usuarios/${id}`, {headers: this.header})
  }

}
