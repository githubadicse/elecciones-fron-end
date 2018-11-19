import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoPresentacionRoutingModule } from './producto-presentacion-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProductoPresentacionRoutingModule,
    HttpClientModule
  ],
  declarations: []
})
export class ProductoPresentacionModule { }



