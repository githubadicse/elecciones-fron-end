import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { RequerimientoVolumen001Model } from '../../requerimiento-volumen-001/requerimiento-volumen-001-model';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ActivatedRoute } from '@angular/router';
import { isUndefined, debug } from 'util';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { Subject } from 'rxjs';
import { Table } from 'primeng/table';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-requerimiento-volumen-001-list',
  templateUrl: './requerimiento-volumen-001-list.component.html',
  styleUrls: ['./requerimiento-volumen-001-list.component.css'],
  providers : [CrudHttpClientServiceShared,UtilitariosAdicse]
})
export class RequerimientoVolumen001ListComponent implements OnInit {
  public loading: boolean =true;
  dataPagination: any;
  public flagRefresh: boolean = false;
  id: number;
  sub: any;
  show: Boolean = true
  anno:number=null;
  numeroEntrega:number=1;
  public requerimientoVolumen001Model: RequerimientoVolumen001Model;
  public requerimientoVolumen001sModel: RequerimientoVolumen001Model[];
  public filtroCodigoModular:string="";
  public requerimientoSelect : RequerimientoVolumen001Model[];

  @Input()
  public requerimientoVolumen001SeleccionadosModel: RequerimientoVolumen001Model[];

  public selectionMode:string = "single";
  
  public titulo: string = "Centros Educativos";


@Input()
isBuscador:boolean=false;

@Input()
  public showPanelBuscarFlag: boolean = false;

@Input()
isMultiSelect:boolean = false;

@Input()
selectionModeDataTable:string = "single";

@Input()
showCheck:boolean = false;

@Input()
showPeriodoEntrega = true;

@Input()
item:string = null;

@Output()
eventBack:EventEmitter<any> = new EventEmitter<any>();

@Output()
eventHandleRowSelect:EventEmitter<any> = new EventEmitter<any>();

@Output()
eventHandleRowUnSelect:EventEmitter<any> = new EventEmitter<any>();

@Output()
eventHeaderCheckboxToggle:EventEmitter<any> = new EventEmitter<any>();

@Output()
eventHandleAfterPagination:EventEmitter<any> = new EventEmitter<any>();

  //-comandos obligatorios para la paginacion-//

  public blocked: boolean = true;

  //public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;

  @ViewChild('dt') dataTable: Table;

  Typeahead = new Subject<string>();
  constructor(private crudHttpClientServiceShared: CrudHttpClientServiceShared, private activateRoute:ActivatedRoute, private utilitariosAdicse:UtilitariosAdicse) { 

  }

  ngOnInit() {

    let d = new Date();
    this.anno = d.getFullYear();
    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    if(!this.isMultiSelect){
      this.selectionMode = "single";
    }else{
      this.selectionMode = "multiple";
    }
    this.initObservable();
  
  }

  initObservable(){

    this.Typeahead.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
    ).subscribe(
      
      res =>{
     
        let value = res[0];
        let field = res[1];
        let operator = res[2];

        this.dataTable.filter(value, field, operator);
        this.filterPage = JSON.stringify(this.dataTable.filters);      
        this.refreshModel(this.dataPagination,true);

    })
  }

  filtrarCodigoModular(){
    let codigos = this.filtroCodigoModular;
    this.refreshModel(this.dataPagination);
    
  }

  eventBackFill(e){
    this.eventBack.emit(e);
  }

  handleRowSelect(event) {
    //event.data = Selected row data
    this.eventHandleRowSelect.emit(this.requerimientoVolumen001SeleccionadosModel);
  }

  handleRowUnSelect(event) {
    //event.data = Selected row data
    
    this.eventHandleRowUnSelect.emit(this.requerimientoVolumen001SeleccionadosModel);
  }

  onHeaderCheckboxToggle(event){
    this.eventHeaderCheckboxToggle.emit(this.requerimientoVolumen001SeleccionadosModel);
  }

  public sendConsulta(){
    
    this.refreshModel(this.dataPagination);

  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
    this.refreshModel(this.dataPagination, true);
  }

  refreshModel(e, flagFilter?, currentPage?) {
   
    this.loading = true;
    this.flagRefresh = false;
    if (flagFilter) {
      e.currentPage = 0;
    }

    
    let paramsExtraAux;
    if(!this.dataPagination){
      
      
      if(this.item){
        paramsExtraAux  = {"anno":this.anno,"numeroEntrega":this.numeroEntrega, "item":this.item};
      }else{
        paramsExtraAux  = {"anno":this.anno,"numeroEntrega":this.numeroEntrega};
      }
     
      if(this.filtroCodigoModular.length > 0){
        paramsExtraAux  = {"anno":this.anno,"numeroEntrega":this.numeroEntrega, "codigosModulares":this.filtroCodigoModular};
      }
    
      let paramsExtra = this.utilitariosAdicse.setMapToString(paramsExtraAux);
      e.paramsExtra = paramsExtra;
    }else{
      paramsExtraAux  = {"anno":this.anno,"numeroEntrega":this.numeroEntrega};
      if(this.filtroCodigoModular.length > 0){
        paramsExtraAux  = {"anno":this.anno,"numeroEntrega":this.numeroEntrega, "codigosModulares":this.filtroCodigoModular};
      }
      let paramsExtra = this.utilitariosAdicse.setMapToString(paramsExtraAux);
      e.paramsExtra = paramsExtra;

    }

    this.dataPagination = e;
   
    
    let mio = this;
    this.crudHttpClientServiceShared.getPagination(e.currentPage == null ? 0 : e.currentPage, e.rowsForPage == null ? 10 : e.rowsForPage, "asc", e.orden, this.filterPage, e.controller, "pagination", e.paramsExtra)
      .subscribe(
        res => {
          //debugger;
          this.requerimientoVolumen001sModel = res.data;
     
          e.getTotalPages(res.totalCount, e.rowsForPage == null ? 10 : e.rowsForPage);
          this.eventHandleAfterPagination.emit(mio)
          this.loading = false;
        }
      );
  }


  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }

  onActivate() {
    console.log("Activate outlet list");
    this.show = false;
  }

  onDeactivate() {
    console.log("Deactivate outlet list");
    this.sub = this.activateRoute.params.subscribe(
      params => {
      
        if( isUndefined(params['flagRefreshReturn']) ){
          return;
        }
        let flagRefresh  = JSON.parse(params['flagRefreshReturn']) ;
        this.refreshPage = flagRefresh;
       
        if(this.refreshPage){
          this.refreshModel(this.dataPagination);
        }
        this.refreshPage=false;
        
      }
    )
    this.show = true;
  }

  ocultarLista() {
    this.show = false;

  }

}
