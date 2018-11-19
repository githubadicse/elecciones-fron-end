import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiaRemisionRoutingModule } from './guia-remision-routing.module';
import { GuiaRemisionMainComponent } from './guia-remision-main/guia-remision-main.component';
import { GuiaRemisionEditComponent } from './guia-remision-edit/guia-remision-edit.component';
import { GuiaRemisionListComponent } from './guia-remision-list/guia-remision-list.component';
import { GrowlModule, DataTableModule, ConfirmDialogModule, DropdownModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActualizaNumeroGuiaComponent } from './actualiza-numero-guia/actualiza-numero-guia.component';
//import { RutaDistribucionModule } from '../ruta-distribucion/ruta-distribucion.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    GuiaRemisionRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DropdownModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    //RutaDistribucionModule
  ],
  declarations: [GuiaRemisionMainComponent, GuiaRemisionEditComponent, GuiaRemisionListComponent, ActualizaNumeroGuiaComponent]
})
export class GuiaRemisionModule { }
