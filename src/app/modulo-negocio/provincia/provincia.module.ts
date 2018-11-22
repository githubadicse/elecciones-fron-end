import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinciaRoutingModule } from './provincia-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProvinciaRoutingModule,
    HttpClientModule
  ],
  declarations: []
})
export class ProvinciaModule { }
