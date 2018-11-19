import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarCalculoMainComponent } from './eliminar-calculo-main/eliminar-calculo-main.component';

const routes: Routes = [

  {
    path : 'main', component : EliminarCalculoMainComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EliminarCalculoRoutingModule { }
