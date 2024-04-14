import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
  },

  {
    path: 'area_de_trabalho',
    loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  {path:'', redirectTo:'/portal', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
