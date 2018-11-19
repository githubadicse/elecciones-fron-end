import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionAlimentariaRoutingModule } from './region-alimentaria-routing.module';
import { RegionAlimentariaMainComponent } from './region-alimentaria-main/region-alimentaria-main.component';
import { RegionAlimentariaEditComponent } from './region-alimentaria-edit/region-alimentaria-edit.component';
import { RegionAlimentariaListaComponent } from './region-alimentaria-lista/region-alimentaria-lista.component';
import { GrowlModule, DataTableModule, ConfirmDialogModule, BlockUIModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RegionAlimentariaRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BlockUIModule,
    HttpClientModule
  ],
  declarations: [RegionAlimentariaMainComponent, RegionAlimentariaEditComponent, RegionAlimentariaListaComponent]
})
export class RegionAlimentariaModule { }
