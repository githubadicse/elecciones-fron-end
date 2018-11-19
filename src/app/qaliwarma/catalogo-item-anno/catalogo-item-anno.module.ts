import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoItemAnnoRoutingModule } from './catalogo-item-anno-routing.module';
import { CatalogoItemAnnoMainComponent } from './catalogo-item-anno-main/catalogo-item-anno-main.component';
import { CatalogoItemAnnoListaComponent } from './catalogo-item-anno-lista/catalogo-item-anno-lista.component';
import { CatalogoItemAnnoEdicionComponent } from './catalogo-item-anno-edicion/catalogo-item-anno-edicion.component';
import { GrowlModule, DataTableModule, ConfirmDialogModule, BlockUIModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CatalogoItemAnnoRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BlockUIModule,
    HttpClientModule
  ],
  declarations: [CatalogoItemAnnoMainComponent, CatalogoItemAnnoListaComponent, CatalogoItemAnnoEdicionComponent]
})
export class CatalogoItemAnnoModule { }
