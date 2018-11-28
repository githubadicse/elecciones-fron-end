import { Component, OnInit } from '@angular/core';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { PersoneroModel } from '../../../model/personero-model';

@Component({
  selector: 'app-personero-list',
  templateUrl: './personero-list.component.html',
  styleUrls: ['./personero-list.component.scss']
})
export class PersoneroListComponent implements OnInit {

  listPersonero: PersoneroModel[] = null;
  displayedColumns: string[] = ['#', 'personero', 'dni', 'accion'];
  constructor(private crudService: CrudHttpClientServiceShared) { }

  ngOnInit() {
    this.loadPersoneros();
  }

  loadPersoneros() {
    this.crudService.getall('personero', 'getall', true).subscribe(res => {
      console.log(res);
      this.listPersonero = res;
    });
  }

}
