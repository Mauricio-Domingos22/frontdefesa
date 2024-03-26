import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';

import { HeadertwoComponent } from './headertwo/headertwo.component';
import { BackofficeComponent } from './backoffice/backoffice.component';


@NgModule({
  declarations: [
   
    HeadertwoComponent,
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ]
})
export class MainpageModule { }
