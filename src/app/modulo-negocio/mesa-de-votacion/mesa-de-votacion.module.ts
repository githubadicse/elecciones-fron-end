import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaDeVotacionRoutingModule } from './mesa-de-votacion-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MesaDeVotacionRoutingModule,
    HttpClientModule
  ],
  declarations: []
})
export class MesaDeVotacionModule { }
