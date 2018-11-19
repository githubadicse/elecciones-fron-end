import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KardexRoutingModule } from './kardex-routing.module';
import { KardexMainComponent } from './kardex-main/kardex-main.component';
import { KardexOptsComponent } from './kardex-opts/kardex-opts.component';
import { KardexDetalleComponent } from './kardex-detalle/kardex-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule, MessagesModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    KardexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    MessagesModule

  ],
  declarations: [KardexMainComponent, KardexOptsComponent, KardexDetalleComponent]
})
export class KardexModule { }
