import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoPorNumeroEntregaRoutingModule } from './producto-por-numero-entrega-routing.module';
import { ProductoPorNumeroEntregaMainComponent } from './producto-por-numero-entrega-main/producto-por-numero-entrega-main.component';
import { ProductoPorNumeroEntregaEditComponent } from './producto-por-numero-entrega-edit/producto-por-numero-entrega-edit.component';
import { ProductoPorNumeroEntregaListComponent } from './producto-por-numero-entrega-list/producto-por-numero-entrega-list.component';
import { BlockUIModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { TableModule } from 'primeng/table';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    ProductoPorNumeroEntregaRoutingModule,
    BlockUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    TableModule,
    MatTableModule,
    MatButtonModule,
    LayoutModule
    
  ],
  declarations: [ProductoPorNumeroEntregaMainComponent, ProductoPorNumeroEntregaEditComponent, ProductoPorNumeroEntregaListComponent]
})
export class ProductoPorNumeroEntregaModule { }
