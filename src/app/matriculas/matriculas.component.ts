import { Component, OnInit } from '@angular/core';
import { Matricula } from './matriculas';
import { MatriculasService } from './matriculas.service';

@Component({
  selector: 'p4-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent implements OnInit {

  // matriculas: Matricula = {
  //   id: 999,
  //   profession: 'test'
  // }

  matriculaList: Matricula[] = []

  constructor(private matriculasService: MatriculasService) { }

  ngOnInit(): void {
    this.matriculasService.getMatriculas().subscribe(matriculas => {
      this.matriculaList = matriculas;
    })
  }

}
