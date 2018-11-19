import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoDistribuidorRoutingModule } from './empleado-distribuidor-routing.module';
import { EmpleadoDistribuidorMainComponent } from './empleado-distribuidor-main/empleado-distribuidor-main.component';
import { EmpleadoDistribuidorListComponent } from './empleado-distribuidor-list/empleado-distribuidor-list.component';
import { EmpleadoDistribuidorEditComponent } from './empleado-distribuidor-edit/empleado-distribuidor-edit.component';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoDistribuidorFindComponent } from './empleado-distribuidor-find/empleado-distribuidor-find.component';

@NgModule({
  imports: [
    CommonModule,
    EmpleadoDistribuidorRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [EmpleadoDistribuidorMainComponent, EmpleadoDistribuidorListComponent, EmpleadoDistribuidorEditComponent, EmpleadoDistribuidorFindComponent],
  exports : [EmpleadoDistribuidorListComponent]
})
export class EmpleadoDistribuidorModule { }
