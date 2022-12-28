import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuarios';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'p4-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarioList: Usuario[] = []

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarioList = usuarios;
    })
  }

}
