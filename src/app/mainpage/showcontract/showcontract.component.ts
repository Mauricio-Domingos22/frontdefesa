import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ElementRef,ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf'


@Component({
  selector: 'app-showcontract',
  templateUrl: './showcontract.component.html',
  styleUrls: ['./showcontract.component.css']
})
export class ShowcontractComponent {

  @ViewChild('exampleModal', {static:false})el!:ElementRef

  descricao: string = '';
  datadeentrega: string = '';
  datadocontrato:string ='';
  //numeroprototipo: number;
  
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getInfoPessoalByUser();
  }


  getInfoPessoalByUser(): void {
    this.http.get<any>('http://127.0.0.1:3333/mostarcontarto')
      .subscribe(
        (res: any) => {
          this.descricao = res.description; 
          this.datadeentrega = res.term; 
          // this.valor = res.value; 
          this.datadocontrato = res.date_contract; 
          // this.numeroprototipo = res.number_prototype; 
          // this.assinatura = res.signature_freelancer; 
          // this.assinaturatwo = res.signature_company; 
          
        },
        (error) => {
          console.error('Erro ao obter dados do usuário:', error);
        }
      );
  }
 printPDF(){
  let pdf = new jsPDF('p','pt','a4')
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("salvarContrato.pdf")
    }
  })
 }

}
