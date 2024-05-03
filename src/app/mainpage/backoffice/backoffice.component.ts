import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

interface Profissao {
  id: number;
  description: string;
}

interface especialidade {
  id: number;
  description: string;
}
interface Publication {
  empresa: string | null;
  subject: string | null;
  body: string | null;
  date_publication: Date | null;
  id_speciality: number | null;
}

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  

  profissaoSelecionada: Profissao | null = null;

  profissoes: Profissao[] = [];

  especialidadeSelecionada: especialidade | null = null;
  especialidades: especialidade[] = [];

  usersFreelancerPublications: any = {}

  @ViewChild('fileInput') fileInput: ElementRef;

  publication: Publication = {
    empresa: null,
    subject: null,
    body: null,
    date_publication: null,
    id_speciality: null
  };

  private token = sessionStorage.getItem('sessionToken')

  public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Acess-Control-Alolw-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)

  constructor(
    private http: HttpClient, private router: Router

  ) {
    
    this.fileInput = new ElementRef(null);

    this.getProfissoes()
    this.getUserFreelancerPublications()
    this.GetEspecialidadesByProfissao()
  }

  publicar() {
    // Verifica se a especialidade selecionada é válida
    if (this.especialidadeSelecionada) {
      // Define o id_speciality como o ID da especialidade selecionada
      this.publication.id_speciality = this.especialidadeSelecionada.id;
  
      // Agora, você pode enviar a publicação
      this.http.post('http://127.0.0.1:3333/publication', this.publication, { headers: this.headers })
        .subscribe(res => {
          if (Object(res).code == 200) {
            alert(Object(res).message)
          }
        });
    } else {
      // Caso nenhuma especialidade tenha sido selecionada, exiba uma mensagem de erro
      alert('Selecione uma especialidade antes de publicar.');
    }
  }
  
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profition;
        console.log('Dados recebidos:', this.profissoes);
      });
  }


  GetEspecialidadesByProfissao() {

    this.http.get<any>('http://127.0.0.1:3333/get-especialidad-by-profissao/' + this.profissaoSelecionada?.id)
      .subscribe(res => {
        this.especialidades = res;
      });

  }

  getUserFreelancerPublications() {

    this.http.get<any>('http://127.0.0.1:3333/get-user-freelancer-publications', { headers: this.headers })
      .subscribe(res => {

        this.usersFreelancerPublications = res
      });
  }


  openFileInput() {
    this.fileInput.nativeElement.click();

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    // Verifique se input.files não é nulo antes de acessá-lo
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      console.log("Arquivo selecionado:", file.name);
    } else {
      console.error("Nenhum arquivo selecionado.");
    }
  }

  verPerfilFreelancer(freelancer: any) {
    console.log(freelancer.user.id)
    this.router.navigateByUrl(`/area_de_trabalho/mostrarperfil/` + freelancer.user.id);
  }
}


