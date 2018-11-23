import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroVotoRoutingModule } from './registro-voto-routing.module';
import { RegistroVotoMainComponent } from './registro-voto-main/registro-voto-main.component';
import { RegistroVotoEditComponent } from './registro-voto-edit/registro-voto-edit.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RegistroVotoRoutingModule,
    MatCardModule,
    ComponentesModule
  ],
  declarations: [RegistroVotoMainComponent, RegistroVotoEditComponent]
})
export class RegistroVotoModule { }
