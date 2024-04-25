import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ShowPerfilService {

  public image_safe: SafeResourceUrl = ''

  constructor(
    private http: HttpClient,
    public sanitizer: DomSanitizer
  ) { }

  image: any
  previewImage(fileName: any) {

    this.image = `http://127.0.0.1:3333/tmp/portfolio/${fileName}`;
    return this.image_safe = this.sanitizer.bypassSecurityTrustResourceUrl(this.image);
  }

}
