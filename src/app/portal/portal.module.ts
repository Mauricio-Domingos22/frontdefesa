import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    PortalComponent,
    LoginComponent,
    RegisterComponent,
    RegisterCompanyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalRoutingModule,
    HttpClientModule,
 
  ]
})
export class PortalModule { }
