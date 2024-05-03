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

   // Verifica se this.contract.term não é null antes de criar o objeto Date
  if (!this.contract.term) {
    alert('Por favor, selecione uma data de entrega.');
    return; 
    // Impede o envio da solicitação se a data não estiver definida
  }

  // Verifica se a data de entrega é válida e está no futuro
  const today = new Date();
  const deliveryDate = new Date(this.contract.term);

  if (deliveryDate < today) {
    alert('Por favor, selecione uma data de entrega futura.');
    return;
     // Impede o envio da solicitação se a data não for válida
  }


    this.http.post('http://127.0.0.1:3333/updatecontrato', this.contract)
      .subscribe(res => {
        alert('Proposta feita com sucesso');
      })
  }


}
