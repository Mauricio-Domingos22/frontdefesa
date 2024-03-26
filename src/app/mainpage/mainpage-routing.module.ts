import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { FreeofficeComponent } from './freeoffice/freeoffice.component';

const routes: Routes = [
  {path:'', component:BackofficeComponent},
  {path:'freelance_trabalho', component:FreeofficeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
