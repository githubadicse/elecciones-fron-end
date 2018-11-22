import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentroDeVotacionRoutingModule } from './centro-de-votacion-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CentroDeVotacionRoutingModule,
    HttpClientModule
  ],
  declarations: []
})
export class CentroDeVotacionModule { }
