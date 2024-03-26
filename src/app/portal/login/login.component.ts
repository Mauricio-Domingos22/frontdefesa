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

  isLoggedIn: boolean = sessionStorage.getItem('sessionToken') ? true : false

  private userLogged = false

  private navigateByUrl: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  entrar() {
    this.http.post('http://127.0.0.1:3333/login', this.login)
      .subscribe(res => {

        console.log(res)

        const data = Object(res)

        if (data.user.type_user == "Freelancer") {

          this.navigateByUrl = 'freelance_trabalho'

          sessionStorage.setItem('sessionToken', data.token.token)
          sessionStorage.setItem('currentUser', JSON.stringify(data.user));

          this.userLogged = true

          this.router.navigateByUrl(`/area_de_trabalho/${this.navigateByUrl}`)

          alert('Seja Bem-Vindo')
        } else {

          this.navigateByUrl = 'empresa_trabalho'

          sessionStorage.setItem('sessionToken', data.token.token)
          sessionStorage.setItem('currentUser', JSON.stringify(data.user));

          this.userLogged = true

          this.router.navigateByUrl(`/area_de_trabalho/${this.navigateByUrl}`)
          alert('Seja Bem-Vindo')
        }
      })
  }


}
