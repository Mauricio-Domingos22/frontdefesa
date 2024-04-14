import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';

import { HeadertwoComponent } from './headertwo/headertwo.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FreeofficeComponent } from './freeoffice/freeoffice.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContractComponent } from './contract/contract.component';
import { ShowcontractComponent } from './showcontract/showcontract.component';
import { ContratoCriterioComponent } from './contrato-criterio/contrato-criterio.component';
import { ShowPerfilComponent } from './show-perfil/show-perfil.component'



@NgModule({
  declarations: [
   
    HeadertwoComponent,
    BackofficeComponent,
    FreeofficeComponent,
    PerfilComponent,
    PublicationsComponent,
    ContractComponent,
    ShowcontractComponent,
    ContratoCriterioComponent,
    ShowPerfilComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MainpageModule { }
