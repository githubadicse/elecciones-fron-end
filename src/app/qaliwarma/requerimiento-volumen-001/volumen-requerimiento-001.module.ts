import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumenRequerimiento001RoutingModule } from './volumen-requerimiento-001-routing.module';
import { RequerimientoVolumen001MainComponent } from './requerimiento-volumen-001-main/requerimiento-volumen-001-main.component';
import { RequerimientoVolumen001ListComponent } from './requerimiento-volumen-001-list/requerimiento-volumen-001-list.component';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequerimientoVolumen001EditComponent } from './requerimiento-volumen-001-edit/requerimiento-volumen-001-edit.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    VolumenRequerimiento001RoutingModule,
    CommonModule,
    SharedModule,
    DataTableModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RequerimientoVolumen001MainComponent, RequerimientoVolumen001ListComponent, RequerimientoVolumen001EditComponent],
  exports : [RequerimientoVolumen001ListComponent]
})
export class VolumenRequerimiento001Module { }
