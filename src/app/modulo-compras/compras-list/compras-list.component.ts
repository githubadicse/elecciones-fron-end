import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CompraModel } from '../compra-model';
import { CrudHttpClientServiceShared } from '../../shared/servicio/crudHttpClient.service.shared';
import { PageEvent, MatPaginator, MatSort } from '@angular/material';
import { Subject, merge, of as observableOf } from 'rxjs';

import { FormControl } from '@angular/forms';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import { ConfigService } from '../../shared/config.service';
import swal from 'sweetalert2';
import { MSJ_ALERT_BORRAR, MSJ_SUCCESS_TOP_END } from '../../shared/config.service.const';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.scss'],
  providers : [CrudHttpClientServiceShared]
})
export class ComprasListComponent implements OnInit {
  showChild: boolean = false;
  showLista: boolean = true;
  titulo = "REGISTRO DE COMPRAS"
  idAlmacen: number = 1;

  comprasModel:CompraModel[];

  public idRegistroModificar: number;

  //-comandos obligatorios para la paginacion-//
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  //-----------------------------------------//



  displayedColumns = ['fechaEmision','proveedorcliente.razonsocial', 'tipodocumento.dscTipoDocumento', 'documentoSerie', 'documentoNumero', 'action'];

  // MatPaginator Inputs
  resultsLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  isLoadingResults = false;
  isRateLimitReached = false;

  // MatPaginator Output
  pageEvent: PageEvent;

  @Input() isVisible:boolean;

  @Output() out_isVisible:EventEmitter<any> = new EventEmitter();

  public idFilial:number=1;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  @ViewChild(MatPaginator) matPaginatorCompras: MatPaginator;
  //@ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>
  @ViewChild(MatSort) sort: MatSort;

  //filter
  _filter:any = {} ;
  _filterPage = undefined;
  _merge;

  //observable auxiliar.
  Typeahead = new Subject<string>();

  selectedRowIndex:any;  

  myControl = new FormControl();  

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private configService:ConfigService) { }

  ngOnInit() {

    this.matPaginatorCompras._intl.itemsPerPageLabel="Reg Por Pag."
    this.Typeahead.pipe(
      map( dato=>{
        console.log("Dato " + dato);
      })
     ).subscribe();


    this.idFilial = this.configService.getIdFilialToken();
    this._filter;

    
    this.sort.sortChange.subscribe( ()=> this.matPaginatorCompras.pageIndex = 0 );

    this.sort.active = "fechaEmision";
    this.sort.direction = "asc";


    this._merge = merge(this.sort.sortChange, this.matPaginatorCompras.page, this.Typeahead)
     .pipe(
       startWith({}),
       switchMap( () => {
         this.isLoadingResults = true;
         return this.crudHttpClientServiceShared.getPagination(this.matPaginatorCompras.pageIndex, this.pageSize ,this.sort.direction,this.sort.active,this._filterPage,"com001","pagination",null)
        
       }),
       map(
         data => {
           this.isLoadingResults = false;
           this.isRateLimitReached = false;
           this.resultsLength = data.totalCount;          
           return data.data;
       }),
       catchError(() => {
         this.isLoadingResults = false;
         // Catch if the GitHub API has reached its rate limit. Return empty data.
         this.isRateLimitReached = true;
         return observableOf([]);
       })      
     ).subscribe(data => this.comprasModel = data); 


      //this.getCompras();
  }
  
  f_selected(e){
    
    // this.idAlmacen = e.idalmacen;    
    // // this.getArrayFilterTable(); // obtiene los filtros
        
    // this.isLoadingResults = true;
    // this.Typeahead.next("dato");
    // this._merge.subscribe(data => {
    // this.comprasModel = data;

    // });    
    
  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }

  page(e){
    this.pageSize = e.pageSize;
  }
  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }

  edit(e){
    
    this.isVisible = false;
    this.out_isVisible.emit({'isVisible':false,'accion':'edit','element':e});

  }
  create(){
    this.isVisible = false;
    this.out_isVisible.emit({'isVisible':false,'accion':'create'});
  }

  highlight(row) {
    this.selectedRowIndex = row.idProductoPorNumeroEntrega;
  }

  getCompras(){
    console.log("compras ")
    this.crudHttpClientServiceShared.getPagination(0, 10 ,"ASC","idcom001",this._filterPage,"com001","pagination",null)
    .subscribe( 
      res => {
        this.comprasModel = res;
      }

     )
  }

  nuevoRegistro(): void {
    this.idRegistroModificar = null; 
     this.changeVerLista();
  }

  modificarRegistro(id: number): void {    
    this.idRegistroModificar = id; 
    this.changeVerLista();
 }

 delete(e, index): void {
  swal(MSJ_ALERT_BORRAR).then((res: any) => {
      if(res.value) {
        this.crudHttpClientServiceShared.delete(e.idcom001, 'com001', 'delete').subscribe(res => { 
          swal(MSJ_SUCCESS_TOP_END); 
          this.comprasModel.splice(index,1);
          this.Typeahead.next("dato");
        });
      }
    });
  }

  changeVerLista(): void { this.showLista = !this.showLista; }

  actualizarLista(isUpdate: boolean): void {
    if (isUpdate) {
      this.Typeahead.next("dato");
    }
    this.changeVerLista();
  }


}
