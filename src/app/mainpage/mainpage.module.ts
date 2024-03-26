import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';

import { HeadertwoComponent } from './headertwo/headertwo.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FreeofficeComponent } from './freeoffice/freeoffice.component'



@NgModule({
  declarations: [
   
    HeadertwoComponent,
    BackofficeComponent,
    FreeofficeComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MainpageModule { }
