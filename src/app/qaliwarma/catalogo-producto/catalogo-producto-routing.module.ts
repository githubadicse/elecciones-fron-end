import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoProductoMainComponent } from './catalogo-producto-main/catalogo-producto-main.component';
import { CatalogoProductoListaComponent } from './catalogo-producto-lista/catalogo-producto-lista.component';
import { CatalogoProductoEdicionComponent } from './catalogo-producto-edicion/catalogo-producto-edicion.component';
import { CatalogoProductoListaItemsComponent } from './catalogo-producto-lista-items/catalogo-producto-lista-items.component';
import { ProductosPorNumeroEntregaComponent } from './productos-por-numero-entrega/productos-por-numero-entrega.component';
import { ProductoMultiplicarNivelEducacionComponent } from './producto-multiplicar-nivel-educacion/producto-multiplicar-nivel-educacion.component';

const routes: Routes = [
  {
    path : '', component : CatalogoProductoMainComponent,
    children : [
      {
        path : '', redirectTo : 'lista'
      },
      {
        path : 'lista', component :  CatalogoProductoListaComponent,

        children : [
          {
            path : 'edicion', component : CatalogoProductoEdicionComponent
          },
          {
            path : 'edicion-item', component : CatalogoProductoListaItemsComponent
          }
          ,
          {
            path : 'producto-por-numero-entrega', component : ProductosPorNumeroEntregaComponent
          },
          {
            path : 'producto-multiplicar-nivel-educacion', component : ProductoMultiplicarNivelEducacionComponent
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
export class CatalogoProductoRoutingModule { }
