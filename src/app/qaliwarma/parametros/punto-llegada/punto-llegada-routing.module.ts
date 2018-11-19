import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntoLlegadaMainComponent } from './punto-llegada-main/punto-llegada-main.component';
import { PuntoLlegadaListComponent } from './punto-llegada-list/punto-llegada-list.component';
import { PuntoLlegadaEditComponent } from './punto-llegada-edit/punto-llegada-edit.component';

const routes: Routes = [

  {

    path: 'main',
    component: PuntoLlegadaMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: PuntoLlegadaListComponent,

        children: [
          {
            path: 'edicion', component: PuntoLlegadaEditComponent
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
export class PuntoLlegadaRoutingModule { }
