import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { MainComponent } from './main/main.component';
import { PosComponent } from './pos/pos.component';
import { VentaListComponent } from './venta-list/venta-list.component';
import { VentaEditComponent } from './venta-edit/venta-edit.component';
import { RegistrarAperturaComponent } from './registrar-apertura/registrar-apertura.component';
import { DataGridModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

import {CalendarModule} from 'primeng/calendar';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VentasRoutingModule,
    DataGridModule,
    SharedModule,
    FormsModule, ReactiveFormsModule, TableModule, NgSelectModule, HttpClientModule, CalendarModule
  ],
  declarations: [MainComponent, PosComponent, VentaListComponent, VentaEditComponent, RegistrarAperturaComponent]
})
export class VentasModule { }
