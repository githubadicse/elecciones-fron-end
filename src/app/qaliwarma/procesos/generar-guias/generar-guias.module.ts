import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarGuiasRoutingModule } from './generar-guias-routing.module';
import { GenerarGuiasMainComponent } from './generar-guias-main/generar-guias-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    GenerarGuiasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [GenerarGuiasMainComponent]
})
export class GenerarGuiasModule { }
