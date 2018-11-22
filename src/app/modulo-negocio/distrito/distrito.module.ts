import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistritoRoutingModule } from './distrito-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DistritoRoutingModule,
    HttpClientModule
  ],
  declarations: []
})
export class DistritoModule { }
