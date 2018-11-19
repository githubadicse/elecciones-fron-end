import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosMainComponent } from './parametros-main/parametros-main.component';
import { BlockUIModule, DataTableModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { PuntoPartidaListComponent } from './punto-partida/punto-partida-list/punto-partida-list.component';
import { PuntoPartidaEditComponent } from './punto-partida/punto-partida-edit/punto-partida-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { TableModule } from 'primeng/table';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from './vehiculo/vehiculo-edit/vehiculo-edit.component';
import { VehiculoMainComponent } from './vehiculo/vehiculo-main/vehiculo-main.component';
import { ChoferEditComponent } from './chofer/chofer-edit/chofer-edit.component';
import { ChoferListComponent } from './chofer/chofer-list/chofer-list.component';
import { ChoferMainComponent } from './chofer/chofer-main/chofer-main.component';
import { TransportistaEditComponent } from './transportista/transportista-edit/transportista-edit.component';
import { TransportistaListComponent } from './transportista/transportista-list/transportista-list.component';
import { TransportistaMainComponent } from './transportista/transportista-main/transportista-main.component';
import { EntregaPorItemMainComponent } from './entrega-por-item/entrega-por-item-main/entrega-por-item-main.component';
import { PuntoPartidaMainComponent } from './punto-partida/punto-partida-main/punto-partida-main.component';

@NgModule({
  imports: [
    CommonModule,
    ParametrosRoutingModule,

    CommonModule,
    SharedModule,
    DataTableModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    
    BlockUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatSidenavModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [ParametrosMainComponent, PuntoPartidaListComponent, PuntoPartidaEditComponent, 
    VehiculoMainComponent,VehiculoListComponent, VehiculoEditComponent, ChoferMainComponent, 
    ChoferListComponent, ChoferEditComponent,
    TransportistaMainComponent, TransportistaListComponent, TransportistaEditComponent,
    EntregaPorItemMainComponent, PuntoPartidaMainComponent
  ]
})
export class ParametrosModule { }
