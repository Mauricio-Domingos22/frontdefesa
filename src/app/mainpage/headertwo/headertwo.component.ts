import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent {

  private userLogged = false
  private currentUserValue: any;

  constructor(
    private router: Router,
  ) {

  }


  logout() {
    sessionStorage.removeItem('currentUser')
    sessionStorage.removeItem('sessionToken')
    this.userLogged = false
    this.router.navigateByUrl('/portal')
  }

}
