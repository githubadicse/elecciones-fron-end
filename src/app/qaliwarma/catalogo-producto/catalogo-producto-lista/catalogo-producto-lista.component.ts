import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/primeng';

import { CatalogoProductoModel } from '../catalogo-producto-model';

import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { isUndefined } from 'util';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-producto-lista',
  templateUrl: './catalogo-producto-lista.component.html',
  styleUrls: ['./catalogo-producto-lista.component.css'],
  providers: [
    ConfirmationService, UtilitariosAdicse,CrudHttpClientServiceShared
  ]
})
export class CatalogoProductoListaComponent implements OnInit {

  public anno = 0;

  public catalogoProductoModel: CatalogoProductoModel;
  public catalogoProductosModel: CatalogoProductoModel[];

  show: boolean = true
  msgs: Message[] = [];


  public titulo: string = "Catalogo Qaliwarma";

  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  public dataPagination: any;
  public paramsExtra: any;
  constructor(
    private confirmationService: ConfirmationService,
    private utilitariosAdicse: UtilitariosAdicse, private crudHttpClientServiceShared:CrudHttpClientServiceShared

  ) { }

  ngOnInit() {
    
    let d = new Date();
    this.anno = d.getFullYear();

    //this.paramsExtra =  ["{'anno':{'value':"+this.anno.toString()+" }}"]
    let dato = { 'anno': this.anno };
    this.paramsExtra = this.utilitariosAdicse.setMapToString(dato);

  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
    this.refreshModel(this.dataPagination, true);
  }

  refreshModel(e, flagFilter?,currentPate?) {
  
    if (flagFilter) {
      e.currentPage = 0;
    }
    
    this.dataPagination = e;
    e.bloquearPantalla();
    this.crudHttpClientServiceShared.getPagination(e.currentPage == null ? 0 : e.currentPage, e.rowsForPage == null ? 10 : e.rowsForPage, "asc", e.orden, this.filterPage, e.controller, "pagination", e.paramsExtra)
      .subscribe(
        res => {
          this.catalogoProductosModel = res.data;
          e.getTotalPages(res.totalCount, e.rowsForPage == null ? 10 : e.rowsForPage);
          e.desbloquearPantalla();
        }
      );

  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }
  onActivate() {
    console.log("Activate outlet main");
    this.show = false;


  }

  onDeactivate() {
    console.log("Deactivate outlet main");
    this.show = true;


  }


  ocultarLista() {
    this.show = false;
  }


  delete(e) {

    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de eliminar el punto de partida en : " + e.direccion,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {

      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idCatalogoProducto, "catalogoproducto", "delete").subscribe(
          res => {
            swal(
              'Deleted!',
              'El registro fue eliminado.',
              'success'
            )
            this.refreshPage = !this.refreshPage;
          },
          error => {

            swal(
              'Deleted!',
              'El Registro No se elimino.' + error,
              'error'
            )
          }
        )

      }
    })
  }

}
