import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionMesaMainComponent } from './asignacion-mesa-main/asignacion-mesa-main.component';
import { AsignacionMesaRoutingModule } from './asignacion-mesa.routing';
import { MatCardModule } from '@angular/material/card';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AsignacionMesaRoutingModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    ComponentesModule
  ],
  declarations: [AsignacionMesaMainComponent]
})
export class AsignacionMesaModule { }
