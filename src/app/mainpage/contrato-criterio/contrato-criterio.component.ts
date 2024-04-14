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

  contract = {
    value: null,
    term: null,
    number_prototype: null,
  }

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getInfoPessoalByUser();
  }

  getInfoPessoalByUser(): void {
    this.http.get<any>('http://127.0.0.1:3333/contrato',)
      .subscribe(
        (res: any) => {
          this.descriptionServices = res.contract.descriptionService; 
          console.log('Dados recebidos:', this.descriptionServices);
        },
        (error) => {
          console.error('Erro ao obter dados do contrato:', error);
        }
      );
  }

  enviar(){
    this.http.post('http://127.0.0.1:3333/contrato', this.contract)
      .subscribe(res => {
        alert('Proposta feita com sucesso');
       })
  }


}
