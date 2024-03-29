import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FreeofficeComponent } from './freeoffice/freeoffice.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  {path:'empresa_trabalho', component:BackofficeComponent},
  {path:'freelance_trabalho', component:FreeofficeComponent},
  {path:'perfil_usuario', component:PerfilComponent},
  {path:'contrato', component:ContractComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
