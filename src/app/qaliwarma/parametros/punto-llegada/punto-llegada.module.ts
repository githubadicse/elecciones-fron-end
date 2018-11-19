import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoLlegadaRoutingModule } from './punto-llegada-routing.module';
import { PuntoLlegadaMainComponent } from './punto-llegada-main/punto-llegada-main.component';
import { PuntoLlegadaListComponent } from './punto-llegada-list/punto-llegada-list.component';
import { PuntoLlegadaEditComponent } from './punto-llegada-edit/punto-llegada-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PuntoLlegadaRoutingModule
  ],
  declarations: [PuntoLlegadaMainComponent, PuntoLlegadaListComponent, PuntoLlegadaEditComponent]
})
export class PuntoLlegadaModule { }
