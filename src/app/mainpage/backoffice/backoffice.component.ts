import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {

  publication = {
    empresa: null,
    subject: null,
    body: null,
    date_publication:null,
    id_speciality: null
  }

  constructor(
    private http: HttpClient
    
    ) {

  }

  publicar() {
    this.http.post('http://127.0.0.1:3333/users', this.publication)
      .subscribe(res => { })
  }

}
