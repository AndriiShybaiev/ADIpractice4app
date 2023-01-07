import { Component, Injectable, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Matricula } from './matriculas';
import { MatriculasService } from './matriculas.service';

@Component({
  selector: 'p4-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent implements OnInit {

  matricula: Matricula = {
    id: 0,
    profession: ''
  }

  message: string = '';

  matriculaList: Matricula[] = []

  constructor(private matriculasService: MatriculasService,private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.matriculasService.getMatriculas().subscribe(matriculas => {
      this.matriculaList = matriculas;
    })
  }

  deleteMatricula(id: number) {
    this.matriculasService.deleteMatricula(id).subscribe()
    const index =  this.matriculaList.findIndex(x => x.id==id)
    if (index > -1) {
      this.matriculaList.splice(index, 1);
}
    
  }

  loggedIn() {
    return this.usuariosService.isLoggedIn()
  }

}


