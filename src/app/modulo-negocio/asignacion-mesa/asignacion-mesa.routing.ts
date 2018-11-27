import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionMesaMainComponent } from './asignacion-mesa-main/asignacion-mesa-main.component';


const routes: Routes = [{
        path: '', component: AsignacionMesaMainComponent
}];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class AsignacionMesaRoutingModule { }
