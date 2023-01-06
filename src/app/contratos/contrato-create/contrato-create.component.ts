import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contratos';
import { ContratosService } from '../contratos.service';

@Component({
  selector: 'p4-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.scss']
})
export class ContratoCreateComponent implements OnInit {

  contrato: Contrato = {
    id: 0,
    usuario_id: 0,
    matricula_id: 0,
    year: 0,
    price :0
  }

  message: string = '';

  constructor(private contratosService: ContratosService) { }

  ngOnInit(): void {
  }

  CreateContrato() {
    this.contratosService.addContrato(this.contrato).subscribe((data) => (this.message = 'Contrato Created'))
  }

}
