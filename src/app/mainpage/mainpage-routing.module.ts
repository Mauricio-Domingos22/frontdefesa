import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FreeofficeComponent } from './freeoffice/freeoffice.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContractComponent } from './contract/contract.component';
import { ShowcontractComponent } from './showcontract/showcontract.component';
import { ContratoCriterioComponent } from './contrato-criterio/contrato-criterio.component';
import { ShowPerfilComponent } from './show-perfil/show-perfil.component';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { RulesComponent } from './rules/rules.component';
import { QueixaComponent } from './queixa/queixa.component';

const routes: Routes = [
  {path:'empresa_trabalho', component:BackofficeComponent},
  {path:'freelance_trabalho', component:FreeofficeComponent},
  {path:'admin_trabalho', component:AdminworkComponent},
  {path:'perfil_usuario', component:PerfilComponent},
  {path:'contrato', component:ContractComponent},
  {path:'vercontrato', component:ShowcontractComponent},
  {path:'contratocriterios', component:ContratoCriterioComponent},
  {path:'mostrarperfil/:user_frelancer_id', component:ShowPerfilComponent},
  {path:'regras', component:RulesComponent},
  {path:'queixa', component:QueixaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
