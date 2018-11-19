import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaArticuloMainComponent } from './categoria-articulo-main/categoria-articulo-main.component';
import { CategoriaArticuloListaComponent } from './categoria-articulo-lista/categoria-articulo-lista.component';
import { CategoriaArticuloEditarComponent } from './categoria-articulo-editar/categoria-articulo-editar.component';

const routes: Routes = [
  {
    path : 'main' , component : CategoriaArticuloMainComponent,
    children : [
      {
        path : '' , redirectTo : 'lista'
      },
      {
        path : 'lista', component : CategoriaArticuloListaComponent,
        children : [
          {
            path : 'edicion', component : CategoriaArticuloEditarComponent
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
export class CategoriaArticuloRoutingModule { }
