import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {

  freelancerName: string = '';
  valor: string = '';
  quantidade!: number;
  datadeentrega: string = '';
  numeroprototipo!: number;

  contract = {
    id_user_freelancer:null,
    id_user_company:null,
    descriptionService:null,
  }

  constructor(
    private http: HttpClient

  ) {

  }


  enviar() {
    this.http.post('http://127.0.0.1:3333/contrato', this.contract)
      .subscribe(res => {
        console.log(this.contract)
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }

}
