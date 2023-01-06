import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrato } from '../contratos';
import { ContratosService } from '../contratos.service';

@Component({
  selector: 'p4-contrato-update',
  templateUrl: './contrato-update.component.html',
  styleUrls: ['./contrato-update.component.scss']
})
export class ContratoUpdateComponent implements OnInit {

  id: number = 0;

  contrato: Contrato = {
    id: 0,
    usuario_id: 0,
    matricula_id: 0,
    year: 0,
    price :0
  }

  message: string = '';

  constructor(private router: ActivatedRoute, private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['contratoId']
    this.contrato.id=this.id
    this.contratosService.getContrato(this.id).subscribe((data) => {this.contrato = data})
  }

  UpdateContrato() {
    this.contratosService.editContrato(this.contrato).subscribe((data) => (this.message= 'Contrato Updated'))
  }

}
