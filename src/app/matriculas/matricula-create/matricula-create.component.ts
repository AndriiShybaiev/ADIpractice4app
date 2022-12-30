import { Component, OnInit } from '@angular/core';
import { Matricula } from '../matriculas';
import { MatriculasService } from '../matriculas.service';

@Component({
  selector: 'p4-matricula-create',
  templateUrl: './matricula-create.component.html',
  styleUrls: ['./matricula-create.component.scss']
})
export class MatriculaCreateComponent implements OnInit {

  matricula: Matricula = {
    id: 0,
    profession: ''
  }

  message: string = '';

  constructor(private matriculasService: MatriculasService) { }

  ngOnInit(): void {
  }

  CreateMatricula() {
    this.matriculasService.addMatricula(this.matricula).subscribe((data) => (this.message = 'Matricula Created'))
  }

}
