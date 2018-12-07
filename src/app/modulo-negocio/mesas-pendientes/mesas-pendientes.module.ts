import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesasPendientesMainComponent } from './mesas-pendientes-main/mesas-pendientes-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesasPendientesRoutingModule } from './mesas-pendientes.routing';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MesasPendientesAsignarComponent } from './mesas-pendientes-asignar/mesas-pendientes-asignar.component';
import { MesasPendientesRegistrarComponent } from './mesas-pendientes-registrar/mesas-pendientes-registrar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MesasPendientesRoutingModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatProgressBarModule,
    ComponentesModule,
    Ng2GoogleChartsModule
  ],
  declarations: [MesasPendientesMainComponent, MesasPendientesAsignarComponent, MesasPendientesRegistrarComponent]
})
export class MesasPendientesModule { }
