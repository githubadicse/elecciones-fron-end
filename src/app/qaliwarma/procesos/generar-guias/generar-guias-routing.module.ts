import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarGuiasMainComponent } from './generar-guias-main/generar-guias-main.component';

const routes: Routes = [
  {
    path : 'main', component : GenerarGuiasMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarGuiasRoutingModule { }
