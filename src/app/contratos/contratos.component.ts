import { Component, OnInit } from '@angular/core';
import { Contrato } from './contratos';
import { ContratosService } from './contratos.service';

@Component({
  selector: 'p4-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  message: string = '';

  contratoList: Contrato[] = []

  constructor(private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.contratosService.getContratos().subscribe(contratos => {this.contratoList = contratos})
  }

  deleteContrato(id: number) {
    this.contratosService.deleteContrato(id).subscribe()
    const index =  this.contratoList.findIndex(x => x.id==id)
    if (index > -1) {
      this.contratoList.splice(index, 1);
}
  }

}
