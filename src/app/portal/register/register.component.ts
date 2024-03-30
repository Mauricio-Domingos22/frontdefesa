import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Profissao {
  id: number;
  description: string;
}
interface Especialidade {
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
  specialties: Especialidade[] = [];
  selectedProfession: number | null = null;
  selectedSpecialty: number | null = null;

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
    id_speciality: null as number | null
  }

  constructor(private http: HttpClient,private router:Router) {
    this.getProfissoes()

  }
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profition;
        console.log('Dados recebidos:', this.profissoes);
      });
  }
  getSpecialtiesByProfession() {
    console.log('Profissão selecionada:', this.selectedProfession);
    if (this.selectedProfession !== null) {
      this.http.get<any[]>(`http://127.0.0.1:3333/groupespecialidade/groupespecialidade/:id/especialities/${this.selectedProfession}/especialities`)
        .subscribe((data: any[]) => {
          console.log('Dados recebidos da API:', data);
          // Mapear os dados recebidos para o formato de Especialidade
          this.specialties = data.map(item => ({ id: item.id, description: item.description }));
        });
    } else {
      this.specialties = [];
    }
  }
  
  
  
  
  


  salvarFree() {
    if (this.selectedSpecialty !== null) {
      this.userFree.id_speciality = this.selectedSpecialty;
    } else {
      this.userFree.id_speciality = null;
    }
  
    this.http.post('http://127.0.0.1:3333/users', this.userFree)
      .subscribe(res => {
        alert('Cadastrado com sucesso');
        this.router.navigate(['/portal/login']);
      });
}
}
