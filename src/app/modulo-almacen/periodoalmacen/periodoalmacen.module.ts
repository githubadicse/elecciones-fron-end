import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodoalmacenRoutingModule } from './periodoalmacen-routing.module';
import { PeriodoalmacenGridComponent } from './periodoalmacen-grid/periodoalmacen-grid.component';
import { PeriodoalmacenEditComponent } from './periodoalmacen-edit/periodoalmacen-edit.component';
import { PeriodoalmacenMainComponent } from './periodoalmacen-main/periodoalmacen-main.component';
import { InicioOperacionesComponent } from './inicio-operaciones/inicio-operaciones.component';
import { CerrarPeriodoComponent } from './cerrar-periodo/cerrar-periodo.component';
import { AperturaPeriodoComponent } from './apertura-periodo/apertura-periodo.component';
import { PeriodoalmacenOpcionesComponent } from './periodoalmacen-opciones/periodoalmacen-opciones.component';
import { FormsModule } from '@angular/forms';

import { PaginatorModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    PeriodoalmacenRoutingModule,
    SharedModule,
    PaginatorModule
  ],
  declarations: [PeriodoalmacenGridComponent, PeriodoalmacenEditComponent, PeriodoalmacenMainComponent, InicioOperacionesComponent, CerrarPeriodoComponent, AperturaPeriodoComponent, PeriodoalmacenOpcionesComponent]
})
export class PeriodoalmacenModule { }
