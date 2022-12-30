import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Matricula } from '../matriculas';
import { MatriculasService } from '../matriculas.service';

@Component({
  selector: 'p4-matricula-update',
  templateUrl: './matricula-update.component.html',
  styleUrls: ['./matricula-update.component.scss']
})
export class MatriculaUpdateComponent implements OnInit {

  id: number = 0;

  matricula: Matricula = {
    id: 0,
    profession: ''
  }


  message: string = '';

  constructor(private router: ActivatedRoute, private matriculasService: MatriculasService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['matriculaId']
    this.matricula.id=this.id
    this.matriculasService.getMatricula(this.id).subscribe(data => {this.matricula.profession = data.profession})
  }

  UpdateMatricula() {
    this.matriculasService.editMatricula(this.matricula).subscribe((data) => (this.message = 'Matricula Updated'))
  }

}
