import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatProgressBarModule, MatProgressBar } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FechaMatComponent } from './fecha-mat/fecha-mat.component';
import { MatInputModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from '../shared/validators/MomentDateAdapter';

import { PaginatorModule } from 'primeng/paginator';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { ProvinciaModule } from '../modulo-negocio/provincia/provincia.module';
import { PersoneroListComponent } from './personero-list/personero-list.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    PaginatorModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    ProvinciaModule
  ],
  providers : [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter }
  ],

  declarations: [
    FechaMatComponent,
    UbigeoComponent,
    PersoneroListComponent

  ],
  exports: [
    MatDatepickerModule,
    FechaMatComponent,
    UbigeoComponent,
    PersoneroListComponent

  ]
})


export class ComponentesModule { }
