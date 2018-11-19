import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarExcelPesoMainComponent } from './generar-excel-peso-main/generar-excel-peso-main.component';

const routes: Routes = [
  {
    path : 'main', component : GenerarExcelPesoMainComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarExcelPesoRoutingModule { }
