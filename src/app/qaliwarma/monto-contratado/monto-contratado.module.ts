import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontoContratadoRoutingModule } from './monto-contratado-routing.module';
import { MontoContratadoMainComponent } from './monto-contratado-main/monto-contratado-main.component';
import { MontoContratadoListComponent } from './monto-contratado-list/monto-contratado-list.component';
import { MontoContratadoEditComponent } from './monto-contratado-edit/monto-contratado-edit.component';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MontoContratadoRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [MontoContratadoMainComponent, MontoContratadoListComponent, MontoContratadoEditComponent]
})
export class MontoContratadoModule { }
