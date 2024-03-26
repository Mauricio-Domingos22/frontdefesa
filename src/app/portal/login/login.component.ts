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

  private navigateByUrl: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  entrar() {
    this.http.post('http://127.0.0.1:3333/login', this.login)
      .subscribe(res => {

        console.log(res)

        if (Object(res).user.type_user == "Freelancer") {

          this.navigateByUrl = 'freelance_trabalho'

          this.router.navigateByUrl(`/area_de_trabalho/${this.navigateByUrl}`)

          alert('Seja Bem-Vindo')
        } else {

          this.navigateByUrl = 'empresa_trabalho'

          this.router.navigateByUrl(`/area_de_trabalho/${this.navigateByUrl}`)
          alert('Seja Bem-Vindo')
        }
      })
  }


}
