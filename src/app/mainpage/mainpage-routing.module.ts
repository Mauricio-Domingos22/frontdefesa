import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FreeofficeComponent } from './freeoffice/freeoffice.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContractComponent } from './contract/contract.component';
import { ShowcontractComponent } from './showcontract/showcontract.component';
import { ContratoCriterioComponent } from './contrato-criterio/contrato-criterio.component';

const routes: Routes = [
  {path:'empresa_trabalho', component:BackofficeComponent},
  {path:'freelance_trabalho', component:FreeofficeComponent},
  {path:'perfil_usuario', component:PerfilComponent},
  {path:'contrato', component:ContractComponent},
  {path:'vercontrato', component:ShowcontractComponent},
  {path:'contratocriterios', component:ContratoCriterioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
