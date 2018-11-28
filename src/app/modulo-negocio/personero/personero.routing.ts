import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersoneroMainComponent } from './personero-main/personero-main.component';
import { PersoneroListComponent } from './personero-list/personero-list.component';
import { PersoneroEditComponent } from './personero-edit/personero-edit.component';

const routes: Routes = [
        {
                path: '', component: PersoneroMainComponent,
                children: [
                        {
                                path: '', redirectTo: 'list'
                        },
                        {
                                path: 'list', component: PersoneroListComponent,
                        },
                        {
                                path: 'edit', component: PersoneroEditComponent,
                        },
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class PersoneroRoutingModule { }
