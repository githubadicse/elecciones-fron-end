import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoMarcaRoutingModule } from './catalogo-marca-routing.module';
import { CatalogoMarcaMainComponent } from './catalogo-marca-main/catalogo-marca-main.component';
import { CatalogoMarcaListComponent } from './catalogo-marca-list/catalogo-marca-list.component';
import { CatalogoMarcaEditComponent } from './catalogo-marca-edit/catalogo-marca-edit.component';
import { GrowlModule, DataTableModule, ConfirmDialogModule, BlockUIModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CatalogoMarcaRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BlockUIModule,
    HttpClientModule
  ],
  declarations: [CatalogoMarcaMainComponent, CatalogoMarcaListComponent, CatalogoMarcaEditComponent]
})
export class CatalogoMarcaModule { }
