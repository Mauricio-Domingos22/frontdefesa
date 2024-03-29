import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {

  contract = {
    freelancer:null,
    company:null,
    description:null,
    term:null,
    value:null,
    date_contract:null,
    number_prototype:null,
    signature_freelancer:"assinado",
    signature_company:"assinado"
  }

  constructor(
    private http: HttpClient

  ) {

  }


  efectuar() {
    this.http.post('http://127.0.0.1:3333/contrato', this.contract)
      .subscribe(res => {
        console.log(this.contract)
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }

}
