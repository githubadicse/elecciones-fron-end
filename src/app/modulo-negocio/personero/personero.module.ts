import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersoneroMainComponent } from './personero-main/personero-main.component';
import { PersoneroEditComponent } from './personero-edit/personero-edit.component';
import { PersoneroListComponent } from './personero-list/personero-list.component';
import { PersoneroRoutingModule } from './personero.routing';

import { MatCardModule } from '@angular/material/card';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    PersoneroRoutingModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ComponentesModule
  ],
  declarations: [
    PersoneroMainComponent,
    PersoneroEditComponent,
    PersoneroListComponent]
})
export class PersoneroModule { }
