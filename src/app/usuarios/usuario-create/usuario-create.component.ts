import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'p4-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    documento: '',
    tipo: 0,
    nombre: '',
    login: '',
    password: ''
  }

  message: string = '';

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  CreateUsuario() {
    this.usuariosService.addUsuario(this.usuario).subscribe((data) => (this.message = 'Usuario Created'))
  }

  loggedIn() {
    return this.usuariosService.isLoggedIn()
  }

}
