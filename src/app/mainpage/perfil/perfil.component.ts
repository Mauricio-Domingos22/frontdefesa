import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  selectedFiles: FileList | null = null;
  filesArray: File[] = [];
  uploadUrl = 'URL_DA_SUA_API/upload'; // Substitua pela URL real da sua API de upload

  nameUser: string = '';
  specialitys: string = '';
  private token = sessionStorage.getItem('sessionToken');
  headers: HttpHeaders;

  form_perfil = {
    description: null,
    filename: null,
    file: null,
    id_freelancer: null
  }

  constructor(
    private http: HttpClient,
    public sanitizer: DomSanitizer
  ) {
    this.headers = new HttpHeaders()
      //.set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.token}`);
  }

  ngOnInit(event: any): void {
    this.getInfoPessoalByUser();
    this.selectedFiles = event.target.files;
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      this.filesArray = Array.from(this.selectedFiles);
    }
  }

  getFileSrc(file: File): string {
    return URL.createObjectURL(file);
  }

  uploadImages() {
    if (this.selectedFiles) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }

      this.http.post(this.uploadUrl, formData)
        .subscribe(
          response => {
            console.log('Upload bem-sucedido:', response);
            // Lógica para lidar com a resposta do servidor
          },
          error => {
            console.error('Erro no upload:', error);
            // Lógica para lidar com erros de upload
          }
        );
    }
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


  private images: any = []
  uploadFile(event: any) {

    this.images = []
    const file = event.target.files[0];
    var reader = new FileReader()

    reader.onload = (event: any) => {
      this.images.push(this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result))
      this.form_perfil.file = file;
    }

    reader.readAsDataURL(event.target.files[0])
  }

  savePorfolio() {

    var formData: any = new FormData();
    formData.append("description", this.form_perfil.description);
    formData.append("file", this.form_perfil.file);
    formData.append("filename", this.form_perfil.filename);
    formData.append("id_freelancer", this.form_perfil.id_freelancer);


    this.http.post("http://127.0.0.1:3333/save-portfolio", formData, { headers: this.headers })
      .subscribe(res => {
        console.log(res)
      })
  }
}


