import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarExcelPesoRoutingModule } from './generar-excel-peso-routing.module';
import { GenerarExcelPesoMainComponent } from './generar-excel-peso-main/generar-excel-peso-main.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GenerarExcelPesoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [GenerarExcelPesoMainComponent]
})
export class GenerarExcelPesoModule { }
