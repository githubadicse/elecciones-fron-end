import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PersoneroModel } from '../../model/personero-model';
import { CrudHttpClientServiceShared } from '../../shared/servicio/crudHttpClient.service.shared';
import { startWith } from 'rxjs/internal/operators/startWith';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-personero-list',
  templateUrl: './personero-list.component.html',
  styleUrls: ['./personero-list.component.scss'],
  providers: [CrudHttpClientServiceShared]
})
export class PersoneroListComponent implements OnInit {
  @Input()
  myControl = new FormControl();

  @Input()
  _formControlName: FormControl;

  @Output()
  getObject: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @ViewChild(MatPaginator) paginadorHost: MatPaginator;


  public verFooter = false;

  private pageMostar = 1;
  public rows = 5;
  public totalRecords = 0;
  private ultimoParametroBuscado = '';


  public listProveedorCliente: PersoneroModel[] = [];

  constructor(private crudService: CrudHttpClientServiceShared, private configService: ConfigService) {
  }

  ngOnInit() {

    this.paginadorHost._intl.nextPageLabel = '';
    this.paginadorHost._intl.previousPageLabel = '';
    this.paginadorHost.hidePageSize = true;




    if (this._formControlName === undefined) {
      this._formControlName = this.myControl;
    }

    // tslint:disable-next-line:no-non-null-assertion
    this._formControlName!.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        map(value => value)
      ).subscribe(res => {


        this.pageMostar = 0;
        this.rows = 5;
        this.ultimoParametroBuscado = res;
        this.paginadorHost.pageIndex = 0;
        this.filtrar(res);
      });


  }

  private filtrar(filterValue): void {
    if (typeof filterValue !== 'string') {
      return;
    }

    if (filterValue === '') {
      this.getObject.emit(false);
      this.autocomplete.closePanel();
      return;
    }

    const _filtros = `nombrepersonero:${filterValue}:contains`;
    const filtros = JSON.stringify(this.configService.jsonFilter(_filtros));

    this.crudService.getPagination(this.pageMostar, this.rows, 'asc', 'nombrepersonero', filtros, 'personero', 'pagination', null)
      .subscribe((res: any) => {
        console.log(res);
        this.listProveedorCliente = <PersoneroModel[]>res.data || null;
        this.totalRecords = res.totalCount;
        if (this.totalRecords === 0) { this.getObject.emit(false); }

        this.verFooter = this.totalRecords > 4 ? true : false;
      });
  }



  public _focus(e) {
    e.target.select();
    if (this.listProveedorCliente) {
      this.autocomplete.closePanel();
    }
  }

  public _displayWith(val: PersoneroModel): string {
    return val ? val.nombrepersonero : '';
  }


  public _onSelectionChange(event, item): void {

    this.getObject.emit(item);
    this.listProveedorCliente = null;
  }

  public page(event: PageEvent): void {
    this.rows = event.pageSize;
    this.pageMostar = event.pageIndex;
    this.filtrar(this.ultimoParametroBuscado);
  }

}
