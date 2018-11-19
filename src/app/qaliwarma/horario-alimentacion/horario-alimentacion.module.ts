import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioAlimentacionRoutingModule } from './horario-alimentacion-routing.module';
import { GrowlModule, DataTableModule, ConfirmDialogModule, BlockUIModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HorarioAlimentacionRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BlockUIModule,
    HttpClientModule
  ],
  declarations: []
})
export class HorarioAlimentacionModule { }
