import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoItemAnnoMainComponent } from './catalogo-item-anno-main/catalogo-item-anno-main.component';
import { CatalogoItemAnnoListaComponent } from './catalogo-item-anno-lista/catalogo-item-anno-lista.component';

const routes: Routes = [{
  path : 'main', component : CatalogoItemAnnoMainComponent,
  children : [
    {
      path : '', redirectTo : 'lista'
    },
    {
      path : 'lista', component : CatalogoItemAnnoListaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoItemAnnoRoutingModule { }
