import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = {
    email: null,
    password: null
  }

  constructor(
    private http: HttpClient,
    private router: Router
    ) {

  }

  entrar() {
    this.http.post('http://127.0.0.1:3333/login', this.login)
      .subscribe(res => {

        if(res){
          this.router.navigateByUrl('/area_de_trabalho')
        }
       })
  }


}
