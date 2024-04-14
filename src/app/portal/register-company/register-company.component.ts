import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent {

  provincias: any = [];

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
    name_company: null,
    nif: null
  }

  constructor(private http: HttpClient, private router: Router) {
    this.getProvincia()

  }

  getProvincia() {
    this.http.get<any>('http://127.0.0.1:3333/city')
      .subscribe(res => {
        this.provincias = res.city;
        console.log('Dados recebidos:', this.provincias);
      });
  }

  salvarComp() {

    this.http.post('http://127.0.0.1:3333/users', this.userComp)
      .subscribe(res => {

        if (res) {
          alert('Castrado com sucesso');

          this.router.navigate(['/portal/login'])
        } else {
          alert('Erro ao registar usuário empresa');
        }
      })
  }


}
