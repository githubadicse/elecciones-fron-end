import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoProductoRoutingModule } from './catalogo-producto-routing.module';
import { CatalogoProductoMainComponent } from './catalogo-producto-main/catalogo-producto-main.component';
import { CatalogoProductoListaComponent } from './catalogo-producto-lista/catalogo-producto-lista.component';
import { CatalogoProductoEdicionComponent } from './catalogo-producto-edicion/catalogo-producto-edicion.component';
import { GrowlModule, DataTableModule, ConfirmDialogModule, DropdownModule,  CodeHighlighterModule, TabViewModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogoProductoListaItemsComponent } from './catalogo-producto-lista-items/catalogo-producto-lista-items.component';
import { ProductosPorNumeroEntregaComponent } from './productos-por-numero-entrega/productos-por-numero-entrega.component';
import { HttpClientModule } from '@angular/common/http';
import { VolumenRequerimiento001Module } from '../requerimiento-volumen-001/volumen-requerimiento-001.module';
import { ProductoMultiplicarNivelEducacionComponent } from './producto-multiplicar-nivel-educacion/producto-multiplicar-nivel-educacion.component';
import {TableModule} from 'primeng/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    CatalogoProductoRoutingModule,
    VolumenRequerimiento001Module,
    GrowlModule,
    DataTableModule,
    TableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DropdownModule,
    HttpClientModule,
    CalendarModule,
    TabViewModule,
    CodeHighlighterModule,
    MatCheckboxModule
  
    
  ],
  declarations: [CatalogoProductoMainComponent, CatalogoProductoListaComponent, CatalogoProductoEdicionComponent, CatalogoProductoListaItemsComponent, ProductosPorNumeroEntregaComponent, ProductoMultiplicarNivelEducacionComponent]
})
export class CatalogoProductoModule { }
