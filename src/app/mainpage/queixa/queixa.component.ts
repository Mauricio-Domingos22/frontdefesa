import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-queixa',
  templateUrl: './queixa.component.html',
  styleUrls: ['./queixa.component.css']
})
export class QueixaComponent {
  queixa = {
    descriptionqueixa:null,
  }

  constructor(
    private http: HttpClient

  ) {

  }
  enviar() {
    this.http.post('http://127.0.0.1:3333/queixa', this.queixa)
      .subscribe(res => {
        console.log(this.queixa)
        if (Object(res).code == 200) {
          alert(Object(res).message)
        }
      })
  }
}
