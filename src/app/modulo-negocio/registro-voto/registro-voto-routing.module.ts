import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroVotoMainComponent } from './registro-voto-main/registro-voto-main.component';

const routes: Routes = [{
  path : '', component : RegistroVotoMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroVotoRoutingModule { }
