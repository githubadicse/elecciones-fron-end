import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoLoteRoutingModule } from './catalogo-lote-routing.module';
import { CatalogoLoteMainComponent } from './catalogo-lote-main/catalogo-lote-main.component';
import { CatalogoLoteListComponent } from './catalogo-lote-list/catalogo-lote-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CatalogoLoteRoutingModule,
    HttpClientModule
  ],
  declarations: [CatalogoLoteMainComponent, CatalogoLoteListComponent]
})
export class CatalogoLoteModule { }
