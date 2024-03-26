import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent {

  userComp = {
    fullname: null,
    binumber: null,
    phone: null,
    username: null,
    email: null,
    password: null,
    id_gender: null,
    id_city: null,
    id_type_user: 2,
    name_company:null,
    nif:null
  }

  constructor(private http: HttpClient) {

  }

  salvarComp() {
    this.http.post('http://127.0.0.1:3333/users', this.userComp)
      .subscribe(res => { })
  }


}
