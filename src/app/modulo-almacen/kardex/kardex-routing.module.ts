import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KardexMainComponent } from './kardex-main/kardex-main.component';
import { KardexOptsComponent } from './kardex-opts/kardex-opts.component';
import { KardexDetalleComponent } from './kardex-detalle/kardex-detalle.component';


const routes: Routes = [{
  path : 'main', component:KardexMainComponent ,
  children : [
    {
      path : '', redirectTo:'kardex' , outlet: 'opts', pathMatch: 'full'
    },

    {
      path : 'kardex', component : KardexOptsComponent , outlet: 'opts'
    },
    {
      path : 'detalle', component : KardexDetalleComponent, outlet : 'detalle'
    }
  ]
 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KardexRoutingModule { }
