import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontoContratadoMainComponent } from './monto-contratado-main/monto-contratado-main.component';
import { MontoContratadoListComponent } from './monto-contratado-list/monto-contratado-list.component';
import { MontoContratadoEditComponent } from './monto-contratado-edit/monto-contratado-edit.component';

const routes: Routes = [
  {

    path: 'main',
    component: MontoContratadoMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: MontoContratadoListComponent,

        children: [
          {
            path: 'edicion', component: MontoContratadoEditComponent
        
          },
    
        ]
      }


    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MontoContratadoRoutingModule { }
