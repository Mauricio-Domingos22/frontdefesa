import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Profissao {
  id: number;
  description: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  profissaoSelecionada: Profissao | null = null;
  
  profissoes: Profissao[] = [];

  userFree = {
    fullname: null,
    binumber: null,
    phone: null,
    username: null,
    email: null,
    password: null,
    id_gender: null,
    id_city: null,
    id_type_user: 1,
    id_speciality: null
  }

  constructor(private http: HttpClient,private router:Router) {
    this.getProfissoes()

  }
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profissions;
        console.log('Dados recebidos:', this.profissoes);
      });
  }


  salvarFree() {
    this.http.post('http://127.0.0.1:3333/users', this.userFree)
      .subscribe(res => {
        alert('Castrado com sucesso');
        this.router.navigate(['/portal/login'])
       })
  }



}
