import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'p4-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss']
})
export class UsuarioUpdateComponent implements OnInit {

  id: number = 0;

  usuario: Usuario = {
    id: 0,
    documento: '',
    tipo: 0,
    nombre: '',
    login: '',
    password: ''
  }

  message: string = '';

  constructor(private router: ActivatedRoute, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['usuarioId']
    this.usuario.id=this.id
    this.usuariosService.getUsuario(this.id).subscribe(data => {this.usuario = data})
  }

  UpdateUsuario() {
    this.usuariosService.editUsuario(this.usuario).subscribe((data) => (this.message = 'Usuario Updated'))
  }

}
