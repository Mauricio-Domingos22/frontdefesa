import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  nameUser: string = '';
  specialitys: string = '';
  private token = sessionStorage.getItem('sessionToken');
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.token}`);
  }

  ngOnInit(): void {
    this.getInfoPessoalByUser();
  }

  getInfoPessoalByUser(): void {
    this.http.get<any>('http://127.0.0.1:3333/perfil', { headers: this.headers })
      .subscribe(
        (res: any) => {
          this.nameUser = res.user.username; 
          this.specialitys = res.user.especialidade.map((especialidade: any) => especialidade.especialidade).join(', ');
          console.log('Dados recebidos:', this.nameUser);
        },
        (error) => {
          console.error('Erro ao obter dados do usuário:', error);
        }
      );
  }
}


