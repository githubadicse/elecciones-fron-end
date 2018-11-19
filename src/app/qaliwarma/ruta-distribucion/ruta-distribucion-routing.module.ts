import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaDistribucionMainComponent } from './ruta-distribucion-main/ruta-distribucion-main.component';
import { RutaDistribucionListComponent } from './ruta-distribucion-list/ruta-distribucion-list.component';
import { RutaDistribucionEditComponent } from './ruta-distribucion-edit/ruta-distribucion-edit.component';
import { EmpleadoDistribuidorFindComponent } from '../empleado-distribuidor/empleado-distribuidor-find/empleado-distribuidor-find.component';
import { RutaDistribucionDetalleComponent } from './ruta-distribucion-detalle/ruta-distribucion-detalle.component';
import { MapaDistribucionComponent } from './mapa-distribucion/mapa-distribucion.component';


const routes: Routes = [
  {

    path: '',
    component: RutaDistribucionMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: RutaDistribucionListComponent,

        children: [
          {
            path: 'edicion', component: RutaDistribucionEditComponent
        
          },
          {
            path: 'detalle', component: RutaDistribucionDetalleComponent
        
          },
          {
            path: 'mapa', component: MapaDistribucionComponent
        
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
export class RutaDistribucionRoutingModule { }
