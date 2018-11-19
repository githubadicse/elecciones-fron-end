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
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from '../shared/validators/MomentDateAdapter';

import { PaginatorModule } from 'primeng/paginator';



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
    MatProgressBarModule
  ],
  providers : [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter }
  ],

  declarations: [
    FechaMatComponent

  ],
  exports: [
    MatDatepickerModule,
    FechaMatComponent

  ]
})


export class ComponentesModule { }
