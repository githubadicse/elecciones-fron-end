import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ControlDespachoMainComponent } from './control-despacho/control-despacho-main/control-despacho-main.component';
import { PlanRastreabilidadComponent } from './plan-rastreabilidad/plan-rastreabilidad.component';

const routes: Routes = [{
  path : '', component : MainComponent,
  children : [
    {
    path : 'control-despacho', component : ControlDespachoMainComponent
  },
  {
    path : 'plan-rastreabilidad', component : PlanRastreabilidadComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
