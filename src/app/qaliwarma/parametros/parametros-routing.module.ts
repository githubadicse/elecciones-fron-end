import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosMainComponent } from './parametros-main/parametros-main.component';
import { PuntoPartidaListComponent } from './punto-partida/punto-partida-list/punto-partida-list.component';
import { PuntoPartidaEditComponent } from './punto-partida/punto-partida-edit/punto-partida-edit.component';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from './vehiculo/vehiculo-edit/vehiculo-edit.component';
import { ChoferListComponent } from './chofer/chofer-list/chofer-list.component';
import { ChoferEditComponent } from './chofer/chofer-edit/chofer-edit.component';
import { TransportistaListComponent } from './transportista/transportista-list/transportista-list.component';
import { TransportistaEditComponent } from './transportista/transportista-edit/transportista-edit.component';
import { EntregaPorItemMainComponent } from './entrega-por-item/entrega-por-item-main/entrega-por-item-main.component';


const routes: Routes = [
  {
    path:'', component : ParametrosMainComponent,
    children : [
      {
        path : 'punto-partida', component : PuntoPartidaListComponent,
        children: [
          {
            path: '', redirectTo: 'lista'
          },
          {
            path: 'lista', component: PuntoPartidaListComponent,
    
            children: [
              {
                path: 'edicion', component: PuntoPartidaEditComponent
              }
            ]
          }
    
    
        ]
      },
      {
        path : 'registro-vehiculos', component : VehiculoListComponent,
        children: [
          {
            path: '', redirectTo: 'lista'
          },
          {
            path: 'lista', component: VehiculoListComponent,
    
            children: [
              {
                path: 'edicion', component: VehiculoEditComponent
              }
            ]
          }
        ]
      },
      {
        path : 'registro-chofer', component : ChoferListComponent,
        children: [
          {
            path: '', redirectTo: 'lista'
          },
          {
            path: 'lista', component: ChoferListComponent,
    
            children: [
              {
                path: 'edicion', component: ChoferEditComponent
              }
            ]
          }
        ]
      },
      {
        path : 'registro-transportista', component : TransportistaListComponent,
        children: [
          {
            path: '', redirectTo: 'lista'
          },
          {
            path: 'lista', component: TransportistaListComponent,
    
            children: [
              {
                path: 'edicion', component: TransportistaEditComponent
              }
            ]
          }
        ]
      },
      {
        path : 'registro-datos-guia', component : EntregaPorItemMainComponent
  
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
