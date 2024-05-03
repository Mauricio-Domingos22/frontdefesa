import { Component, Input  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ShowPerfilService } from './show-perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-perfil',
  templateUrl: './show-perfil.component.html',
  styleUrls: ['./show-perfil.component.css']
})
export class ShowPerfilComponent {
  @Input() freelancer: any;

  nameUser: string = '';
  specialitys: string = '';
  numeroTelefone: string = '';
  private token = sessionStorage.getItem('sessionToken');
  headers: HttpHeaders;

  user_freelancer: any = []
  user_frelancer_id: any;
  portfolios: any = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private showPerfilService: ShowPerfilService,
    private router: Router
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
    this.getPortfolio()
  }

  getPortfolio() {

    this.http.get('http://127.0.0.1:3333/list-portfolio', { headers: this.headers })
      .subscribe(res => {
        this.portfolios = res
      })
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
       
       // Verifica se a propriedade 'telefone' existe no objeto retornado e se é uma string
      if ('telefone' in response && typeof response.telefone === 'string') {
        // Se 'telefone' existir e for uma string, atribui seu valor à variável numeroTelefone
        this.numeroTelefone = response.telefone;
      } else {
        // Caso contrário, exibe uma mensagem de erro ou define um valor padrão para 'numeroTelefone'
        console.error('Propriedade "telefone" não encontrada ou não é uma string no objeto retornado pela API.');
        this.numeroTelefone = ''; // Defina um valor padrão aqui, se necessário
      }
      })
  }

  previewImage(filename: any) {
    return this.showPerfilService.previewImage(filename)
  }

  solicitarServico() {
    if (this.freelancer && this.freelancer.user) {
      console.log(this.freelancer.user.id);
      this.router.navigateByUrl(`/area_de_trabalho/contrato/${this.freelancer.user.id}`);
    } else {
      console.error('O objeto freelancer ou sua propriedade user é undefined.');
    }
  }
  
  iniciarConversa() {
    // Verifica se o número de telefone está definido
    if (!this.numeroTelefone) {
      console.error('Número de telefone não definido.');
      return;
    }
  
    // Mensagem inicial (opcional)
    const mensagem = "Olá, estou interessado no seu serviço.";
  
    // Monta o link do WhatsApp com o número de telefone e a mensagem
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${this.numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
  
    // Abre o link em uma nova janela ou guia
    window.open(linkWhatsapp, "_blank");
  }
  

  

}



