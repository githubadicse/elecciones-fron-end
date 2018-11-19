import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EliminarCalculoRoutingModule } from './eliminar-calculo-routing.module';
import { EliminarCalculoMainComponent } from './eliminar-calculo-main/eliminar-calculo-main.component';
import { BlockUIModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EliminarCalculoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule
  ],
  declarations: [EliminarCalculoMainComponent]
})
export class EliminarCalculoModule { }
