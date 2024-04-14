import { HttpClient } from '@angular/common/http';
import { Component,ViewChild, ElementRef} from '@angular/core';

interface Profissao {
  id: number;
  description: string;
}

interface especialidade{
  id:number;
  description: string;
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
  especialidades: especialidade[] =[];

  @ViewChild('fileInput') fileInput: ElementRef;

  publication = {
    empresa: null,
    subject: null,
    body: null,
    date_publication: null,
    id_speciality: null
  }

  constructor(
    private http: HttpClient

  ) {
    this.fileInput = new ElementRef(null);
    this.getProfissoes()
    this.getEspecialidade()
  }

  publicar() {
    this.http.post('http://127.0.0.1:3333/publication', this.publication)
      .subscribe(res => {
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }
  getProfissoes() {
    this.http.get<any>('http://127.0.0.1:3333/profissao')
      .subscribe(res => {
        this.profissoes = res.profition;
        console.log('Dados recebidos:', this.profissoes);
      });
  }

  getEspecialidade() {
    this.http.get<any>('http://127.0.0.1:3333/especialidade')
      .subscribe(res => {
        this.especialidades = res.specialties;
        console.log('Dados recebidos:', this.especialidades);
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
}


