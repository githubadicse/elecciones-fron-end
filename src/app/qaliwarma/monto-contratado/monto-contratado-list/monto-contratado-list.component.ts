import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { isUndefined } from 'util';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ActivatedRoute } from '@angular/router';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { MontoContratadoModel } from '../monto-contratado-model';

@Component({
  selector: 'app-monto-contratado-list',
  templateUrl: './monto-contratado-list.component.html',
  styleUrls: ['./monto-contratado-list.component.css'],
  providers : [CrudHttpClientServiceShared,UtilitariosAdicse]
})
export class MontoContratadoListComponent implements OnInit {
  dataPagination: any;
  public flagRefresh: boolean = false;
  id: number;
  sub: any;
  show: Boolean = true;
  anno:number;
  numeroEntrega:number = 1;
  public montoContratadoModel: MontoContratadoModel;
  public montoContratadosModel: MontoContratadoModel[];

  public titulo: string = "Parametro de Precios Unitarios Contratados";

  //-comandos obligatorios para la paginacion-//

  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;

  constructor(private crudHttpClientServiceShared: CrudHttpClientServiceShared, private activateRoute:ActivatedRoute, 
     private utilitariosAdicse:UtilitariosAdicse) { }

  ngOnInit() {

    let d = new Date();
    this.anno = d.getFullYear();

    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
    this.refreshModel(this.dataPagination, true);

  }

  sendConsulta(){
    this.refreshModel(this.dataPagination);
  }
  refreshModel(e, flagFilter?, currentPate?) {
    this.flagRefresh = false;
    
    if (flagFilter) {
      e.currentPage = 0;
    }

 
    let paramsExtraAux = {"anno":this.anno,"numeroEntrega":this.numeroEntrega};
    let paramsExtra = this.utilitariosAdicse.setMapToString(paramsExtraAux);
    e.paramsExtra = paramsExtra;
    this.dataPagination = e;
    this.crudHttpClientServiceShared.getPagination(e.currentPage == null ? 0 : e.currentPage, e.rowsForPage == null ? 10 : e.rowsForPage, "asc", e.orden, this.filterPage, e.controller, "pagination", e.paramsExtra)
      .subscribe(
        res => {
         
          this.montoContratadosModel =  res.data;
          e.getTotalPages(res.totalCount, e.rowsForPage == null ? 10 : e.rowsForPage);
        },
        err=>{
         
          alert(err)
        },
        ()=>{

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

  delete(e) {

    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de eliminar el punto de partida en : " ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {

      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idMontoContratado, "montoContratado", "delete").subscribe(
          res => {
            swal(
              'Eliminacion!',
              'El registro fue eliminado.',
              'success'
            )
            this.refreshPage = !this.refreshPage;
          },
          error => {

            swal(
              'Eliminacion!',
              'El Registro No se elimino.' + error,
              'error'
            )
          }
        )

      }
    })
  }

}
