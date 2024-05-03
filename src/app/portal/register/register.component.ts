import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Profissao {
  id: number;
  description: string;
}
interface Provincia {
  id: number;
  description: string;
}

interface especialidade {
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

  provincySelecionada: Provincia | null = null;

  provincias: Provincia[] = [];

  especialidadeSelecionada: especialidade | null = null;
  especialidades: especialidade[] = [];

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
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.getProfissoes()
    this.getProvincia()
   
    this.GetEspecialidadByProfissao()

  }
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profition;
        console.log('Dados recebidos:', this.profissoes);
      });
  }

  GetEspecialidadByProfissao() {

    this.http.get<any>('http://127.0.0.1:3333/get-especialidad-by-profissao/' + this.profissaoSelecionada?.id)
      .subscribe(res => {
        this.especialidades = res;
      });

  }

  getProvincia() {
    this.http.get<any>('http://127.0.0.1:3333/city')
      .subscribe(res => {
        this.provincias = res.city;
        console.log('Dados recebidos:', this.provincias);
      });
  }

  

  confirmPassword: string ="";

  salvarFree() {
//     if (this.userFree.email && typeof this.userFree.email === 'string') {
//       if (!this.validarEmail(this.userFree.email)) {
//         this.errorMessage = "Por favor, insira um email válido.";
//           return;
//       }
//   } else {
//     this.errorMessage = "Por favor, insira um email válido.";
//       return;
//   }
    
//   if (this.userFree.password === null || this.userFree.password === '') {
//     this.errorMessage = "*O campo de senha não deve ser nulo";
//     return;
// }

// if (this.confirmPassword === null || this.confirmPassword === '') {
//     this.errorMessage = "*Por favor, preencha o campo de confirmação de senha.";
//     return;
// }

// if (this.userFree.password !== this.confirmPassword) {
//     this.errorMessage = "*As senhas não correspondem.";
//     return;
// }

//   const telefone = this.userFree.phone;
//   if (telefone && typeof telefone === 'string') {
//       if (!this.validarTelefone(telefone)) {
//         this.errorMessage = "*Por favor, insira um número de telefone válido.";
//           return;
//       }
//   } else {
//     this.errorMessage = "*Por favor, insira um número de telefone válido.";
//       return;
//   }

//   if (this.userFree.binumber && typeof this.userFree.binumber === 'string') {
//     if (!this.validarBilheteIdentidade(this.userFree.binumber)) {
//       this.errorMessage = "Por favor, insira um número de bilhete de identidade válido.";
//         return;
//     }
// } else {
//   this.errorMessage = "Por favor, insira um número de bilhete de identidade válido.";
//     return;
// }



    this.http.post('http://127.0.0.1:3333/users', this.userFree)
      .subscribe(res => {

        if (res) {
          alert('Castrado com sucesso');
          this.router.navigate(['/portal/login'])
        } else {
          alert('Erro ao registar usuário');
        }
      })
  }

//     validarEmail(email: string) {
//     var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// validarTelefone(telefone: string) {
//   var re = /^9[1-9]\d{7}$/;
//   return re.test(telefone);
// }

// validarBilheteIdentidade(bilhete: string) {
//   var re = /^006\d{6}[A-Z]{2}\d{3}$/;
//   return re.test(bilhete);
// }


}

