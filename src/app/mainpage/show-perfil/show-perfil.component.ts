import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-perfil',
  templateUrl: './show-perfil.component.html',
  styleUrls: ['./show-perfil.component.css']
})
export class ShowPerfilComponent {

  nameUser: string = '';
  specialitys: string = '';
  private token = sessionStorage.getItem('sessionToken');
  headers: HttpHeaders;

  user_freelancer: any = []
  user_frelancer_id: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.token}`);


    this.route.paramMap.subscribe((params) => {
      this.user_frelancer_id = params.get("user_frelancer_id");
    });
  }


  ngOnInit(): void {
    this.getInfoPessoalByUser();
    this.getFreelancerPerfil()
  }

  getInfoPessoalByUser(): void {
    this.http.get<any>('http://127.0.0.1:3333/perfil', { headers: this.headers })
      .subscribe(
        (res: any) => {
          this.nameUser = res.user.username;
          this.specialitys = res.user.especialidade.map((especialidade: any) => especialidade.especialidade).join(', ');
        },
        (error) => {
          console.error('Erro ao obter dados do usuário:', error);
        }
      );
  }

  getFreelancerPerfil() {

    this.http.get('http://127.0.0.1:3333/usuariodados/' + this.user_frelancer_id)
      .subscribe(response => {

        this.user_freelancer = response
      })
  }
}
