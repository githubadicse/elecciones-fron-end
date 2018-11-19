import { Component, OnInit } from '@angular/core';
import { CategoriaArticuloModel } from '../categoria-articulo-model';
import { Message, ConfirmationService } from 'primeng/primeng';

import { ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';


@Component({
  selector: 'app-categoria-articulo-lista',
  templateUrl: './categoria-articulo-lista.component.html',
  styleUrls: ['./categoria-articulo-lista.component.css'],
  providers: [ConfirmationService,CrudHttpClientServiceShared]
})
export class CategoriaArticuloListaComponent implements OnInit {


  sub: any;
  flagRefresh: boolean;
  dataPagination: any;
  show: boolean = true
  msgs: Message[] = [];

  public categoriaArticuloModel: CategoriaArticuloModel;
  public categoriaArticulosModel: CategoriaArticuloModel[];

  public titulo: string = "Categorias";

  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;

  constructor(private confirmationService: ConfirmationService,private crudHttpClientServiceShared:CrudHttpClientServiceShared, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
    this.refreshModel(this.dataPagination, true);
  }

  refreshModel(e, flagFilter?, currentPate?) {
    this.flagRefresh = false;
    if (flagFilter) {
      e.currentPage = 0;
    }

    this.dataPagination = e;
    this.crudHttpClientServiceShared.getPagination(e.currentPage == null ? 0 : e.currentPage, e.rowsForPage == null ? 10 : e.rowsForPage, "asc", e.orden, this.filterPage, e.controller, "pagination", e.paramsExtra)
      .subscribe(
        res => {
          this.categoriaArticulosModel = res.data;
          e.getTotalPages(res.totalCount, e.rowsForPage == null ? 10 : e.rowsForPage);
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
