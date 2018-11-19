import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaArticuloRoutingModule } from './categoria-articulo-routing.module';
import { CategoriaArticuloMainComponent } from './categoria-articulo-main/categoria-articulo-main.component';
import { CategoriaArticuloListaComponent } from './categoria-articulo-lista/categoria-articulo-lista.component';
import { CategoriaArticuloEditarComponent } from './categoria-articulo-editar/categoria-articulo-editar.component';
import { ConfirmDialogModule, GrowlModule, DataTableModule } from 'primeng/primeng';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriaArticuloRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    HttpClientModule
  ],
  declarations: [CategoriaArticuloMainComponent, CategoriaArticuloListaComponent, CategoriaArticuloEditarComponent]
})
export class CategoriaArticuloModule { }
