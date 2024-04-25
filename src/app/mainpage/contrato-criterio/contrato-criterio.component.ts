import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato-criterio',
  templateUrl: './contrato-criterio.component.html',
  styleUrls: ['./contrato-criterio.component.css']
})
export class ContratoCriterioComponent {
  descriptionServices: string = '';
  empresaNome: string = '';

  contract = {
    value: null,
    term: null,
    number_prototype: null,
    quantity: null
  }

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getInfocontratoByUser();
  }

  getInfocontratoByUser(): void {
    this.http.get<any>('http://127.0.0.1:3333/contrato',)
      .subscribe(
        (res: any) => {
          this.descriptionServices = res.contrato.descriptionService;
          this.empresaNome = res.username;
          console.log('Dados recebidos:', this.descriptionServices);
        },
        (error) => {
          console.error('Erro ao obter dados do contrato:', error);
        }
      );
  }

  enviar() {
    this.http.post('http://127.0.0.1:3333/updatecontrato', this.contract)
      .subscribe(res => {
        alert('Proposta feita com sucesso');
      })
  }

  editar() {
    this.http.post('http://127.0.0.1:3333/updatecontrato', this.contract)
      .subscribe(res => {
        alert('Proposta feita com sucesso');
      })
  }


}
