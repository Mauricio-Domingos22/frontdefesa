import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminwork',
  templateUrl: './adminwork.component.html',
  styleUrls: ['./adminwork.component.css']
})
export class AdminworkComponent {
  queixas: any = []

  constructor(
    private http: HttpClient

  ) {
    this.getQueixasByUser()
  }

  getQueixasByUser() {

    this.http.get('http://127.0.0.1:3333/publications_users_freelancer', { headers: this.queixas })
      .subscribe(res => {
        this.queixas = Object(res).publications
        console.log('Dados recebidos:', this.queixas)
      })
  }

}
