import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-freeoffice',
  templateUrl: './freeoffice.component.html',
  styleUrls: ['./freeoffice.component.css']
})
export class FreeofficeComponent {
  // buttonDisabled: boolean = false;
  submittedPublications: Set<number> = new Set<number>();
  loggedInFreelancerId: number | null = null;

  publications: any = []

  submited = {
    id_user_inteterested: null,
    id_user_publications: null,
    date_submit: null
  }

  private token = sessionStorage.getItem('sessionToken')

  public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Acess-Control-Alolw-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)


    ngOnInit() {
     
      // Recupera as publicações submetidas do armazenamento local ao carregar o componente
      const submittedPublicationsString = localStorage.getItem('submittedPublications');
      if (submittedPublicationsString) {
        // this.submittedPublications = new Set<number>(JSON.parse(submittedPublicationsString));
      
      }
    }

  constructor(
    private http: HttpClient

  ) {
    this.getPublicationByUser()
  }

  getPublicationByUser() {

    this.http.get('http://127.0.0.1:3333/publications_users_freelancer', { headers: this.headers })
      .subscribe(res => {
        this.publications = Object(res).publications
        
        console.log('Dados recebidos:', this.publications)
      })
  }

  submeter(item: any) {

    this.submittedPublications.add(item.id);

    localStorage.setItem('submittedPublications', JSON.stringify(Array.from(this.submittedPublications)));

    this.submited.id_user_publications = item.id

    this.http.post('http://127.0.0.1:3333/submetido', this.submited, { headers: this.headers })
      .subscribe(res => {
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }

  isSubmitted(item: any): boolean {
    return this.submittedPublications.has(item.id);
  }

}
