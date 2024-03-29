import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-freeoffice',
  templateUrl: './freeoffice.component.html',
  styleUrls: ['./freeoffice.component.css']
})
export class FreeofficeComponent {

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

  submeter() {
    this.http.post('http://127.0.0.1:3333/submetido', this.submited)
      .subscribe(res => {
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }

}
