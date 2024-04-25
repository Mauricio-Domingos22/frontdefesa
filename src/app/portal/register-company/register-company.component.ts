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
    arquivo:null,
    nif: null
  }

  errorMessage: string = '';

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

  confirmPassword: string ="";

  salvarComp() {

    if (this.userComp.email && typeof this.userComp.email === 'string') {
      if (!this.validarEmail(this.userComp.email)) {
        this.errorMessage = "Por favor, insira um email válido.";
          return;
      }
  } else {
    this.errorMessage = "Por favor, insira um email válido.";
      return;
  }
    
  if (this.userComp.password === null || this.userComp.password === '') {
    this.errorMessage = "*O campo de senha não deve ser nulo";
    return;
}

if (this.confirmPassword === null || this.confirmPassword === '') {
    this.errorMessage = "*Por favor, preencha o campo de confirmação de senha.";
    return;
}

if (this.userComp.password !== this.confirmPassword) {
    this.errorMessage = "*As senhas não correspondem.";
    return;
}


  const telefone = this.userComp.phone;
  if (telefone && typeof telefone === 'string') {
      if (!this.validarTelefone(telefone)) {
        this.errorMessage = "*Por favor, insira um número de telefone válido.";
          return;
      }
  } else {
    this.errorMessage = "*Por favor, insira um número de telefone válido.";
      return;
  }

  if (this.userComp.binumber && typeof this.userComp.binumber === 'string') {
    if (!this.validarBilheteIdentidade(this.userComp.binumber)) {
      this.errorMessage = "Por favor, insira um número de bilhete de identidade válido.";
        return;
    }
} else {
  this.errorMessage = "Por favor, insira um número de bilhete de identidade válido.";
    return;
}

const nif = this.userComp.nif;
  if (nif && typeof nif === 'string') {
    if (!this.validarNIF(nif)) {
      this.errorMessage = "Por favor, insira um NIF angolano válido.";
      return;
    }
  } else {
    this.errorMessage = "Por favor, insira um NIF angolano válido.";
    return;
  }






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

  validarEmail(email: string) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

validarTelefone(telefone: string) {
  var re = /^9[1-9]\d{7}$/;
  return re.test(telefone);
}

validarBilheteIdentidade(bilhete: string) {
  var re = /^006\d{6}[A-Z]{2}\d{3}$/;
  return re.test(bilhete);
}

validarNIF(nif: string) {
  // Verificar se o NIF tem 10 dígitos e começa com 5
  return /^[5]\d{9}$/.test(nif);
}

}
