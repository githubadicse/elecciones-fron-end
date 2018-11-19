import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoDistribuidorMainComponent } from './empleado-distribuidor-main/empleado-distribuidor-main.component';
import { EmpleadoDistribuidorListComponent } from './empleado-distribuidor-list/empleado-distribuidor-list.component';
import { EmpleadoDistribuidorEditComponent } from './empleado-distribuidor-edit/empleado-distribuidor-edit.component';

const routes: Routes = [
  {

    path: 'main',
    component: EmpleadoDistribuidorMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: EmpleadoDistribuidorListComponent,

        children: [
          {
            path: 'edicion', component: EmpleadoDistribuidorEditComponent
          }
        ]
      }


    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoDistribuidorRoutingModule { }
