import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequerimientoVolumen001MainComponent } from './requerimiento-volumen-001-main/requerimiento-volumen-001-main.component';
import { RequerimientoVolumen001EditComponent } from './requerimiento-volumen-001-edit/requerimiento-volumen-001-edit.component';
import { RequerimientoVolumen001ListComponent } from './requerimiento-volumen-001-list/requerimiento-volumen-001-list.component';

const routes: Routes = [
  {

    path: '',
    component: RequerimientoVolumen001MainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: RequerimientoVolumen001ListComponent,

        children: [
          {
            path: 'edicion', component: RequerimientoVolumen001EditComponent
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
export class VolumenRequerimiento001RoutingModule { }
