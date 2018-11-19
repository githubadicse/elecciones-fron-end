import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoPorNumeroEntregaMainComponent } from './producto-por-numero-entrega-main/producto-por-numero-entrega-main.component';
import { ProductoPorNumeroEntregaListComponent } from './producto-por-numero-entrega-list/producto-por-numero-entrega-list.component';
import { ProductoPorNumeroEntregaEditComponent } from './producto-por-numero-entrega-edit/producto-por-numero-entrega-edit.component';

const routes: Routes = [
{
  path : '', component : ProductoPorNumeroEntregaMainComponent,
  children : [
    {
      path : '', redirectTo : 'lista'
    },
    {
      path : 'lista', component :  ProductoPorNumeroEntregaListComponent,

      children : [
        {
          path : 'edicion', component : ProductoPorNumeroEntregaEditComponent
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
export class ProductoPorNumeroEntregaRoutingModule { }
