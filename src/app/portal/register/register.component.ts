import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Profissao {
  id: number;
  description: string;
}
interface Provincia{
  id: number;
  description: string;
}

interface especialidade{
  id:number;
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
  especialidades: especialidade[] =[];

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
    this.getProvincia()
    this.getEspecialidade()

  }
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profition;
        console.log('Dados recebidos:', this.profissoes);
      });
  }

  getProvincia() {
    this.http.get<any>('http://127.0.0.1:3333/city')
      .subscribe(res => {
        this.provincias = res.city;
        console.log('Dados recebidos:', this.provincias);
      });
  }

  getEspecialidade() {
    this.http.get<any>('http://127.0.0.1:3333/especialidade')
      .subscribe(res => {
        this.especialidades = res.specialties;
        console.log('Dados recebidos:', this.especialidades);
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

