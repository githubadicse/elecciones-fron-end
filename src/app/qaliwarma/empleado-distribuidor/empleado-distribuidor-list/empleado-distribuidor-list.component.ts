import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpleadoDistribuidorModel } from '../empleado-distribuidor-model';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../shared/servicio/shared.service';
import { isUndefined } from 'util';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-distribuidor-list',
  templateUrl: './empleado-distribuidor-list.component.html',
  styleUrls: ['./empleado-distribuidor-list.component.css'],
  providers : [CrudHttpClientServiceShared]
})
export class EmpleadoDistribuidorListComponent implements OnInit {

@Input()
isBuscador:boolean=false;

@Input()
  public showPanelBuscarFlag: boolean = false;

@Output()
eventBack:EventEmitter<any> = new EventEmitter<any>();


  dataPagination: any;
  public flagRefresh: boolean = false;
  id: number;
  sub: any;
  show: Boolean = true
  public empleadoDistribuidor: EmpleadoDistribuidorModel;
  public empleadoDistribuidorsModel: EmpleadoDistribuidorModel[];

  public titulo: string = "Empleado Distribuidor";

  //-comandos obligatorios para la paginacion-//

  public blocked: boolean;

  

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  constructor(private crudHttpClientServiceShared: CrudHttpClientServiceShared, private activateRoute:ActivatedRoute) { 

  }

  ngOnInit() {
  }

  eventBackFill(e){
    this.eventBack.emit(e);
  }
  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
    this.refreshModel(this.dataPagination, true);
  }

  refreshModel(e, flagFilter?, currentPage?) {
    this.flagRefresh = false;
    if (flagFilter) {
      e.currentPage = 0;
    }

    this.dataPagination = e;
    this.crudHttpClientServiceShared.getPagination(e.currentPage == null ? 0 : e.currentPage, e.rowsForPage == null ? 10 : e.rowsForPage, "asc", e.orden, this.filterPage, e.controller, "pagination", e.paramsExtra)
      .subscribe(
        res => {
          this.empleadoDistribuidorsModel = res.data;
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

  delete(e) {

    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de eliminar el empleado : " + e.nombres,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {

      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idEmpleadoDistribuidor , "empleadoDistribuidor", "delete").subscribe(
          res => {
            swal(
              'Deleted!',
              'El registro fue eliminado.',
              'success'
            )
            this.refreshModel(this.dataPagination);
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
