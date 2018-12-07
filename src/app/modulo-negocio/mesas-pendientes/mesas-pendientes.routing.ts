import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesasPendientesMainComponent } from './mesas-pendientes-main/mesas-pendientes-main.component';

const routes: Routes = [
        {
                path: '', component: MesasPendientesMainComponent
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class MesasPendientesRoutingModule { }
