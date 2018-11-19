import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaEditComponent } from './venta-edit/venta-edit.component';

import { RegistrarAperturaComponent } from './registrar-apertura/registrar-apertura.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path : 'main', component : MainComponent
  },
  {
    path : 'registrar', component : RegistrarAperturaComponent
  },
  {
    path : 'venta', component : VentaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
