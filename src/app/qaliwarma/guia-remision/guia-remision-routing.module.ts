import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaRemisionListComponent } from './guia-remision-list/guia-remision-list.component';
import { GuiaRemisionEditComponent } from './guia-remision-edit/guia-remision-edit.component';
import { ActualizaNumeroGuiaComponent } from './actualiza-numero-guia/actualiza-numero-guia.component';
import { GuiaRemisionMainComponent } from './guia-remision-main/guia-remision-main.component';

const routes: Routes = [
  {
    path : 'actualiza', component: ActualizaNumeroGuiaComponent

    
  },
 
  {
    
    path : 'main', component: GuiaRemisionMainComponent,
    children : [
    
      {
        path : 'lista',component : GuiaRemisionListComponent
      },
      {
        path : 'editar', component: GuiaRemisionEditComponent
      }
    ]
    
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaRemisionRoutingModule { }
