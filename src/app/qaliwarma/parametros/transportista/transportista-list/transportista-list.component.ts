import { Component, OnInit } from '@angular/core';
import { TransportistaModel } from '../transportista-model';

import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
import { isUndefined } from 'util';
import { CrudHttpClientServiceShared } from '../../../../shared/servicio/crudHttpClient.service.shared';


@Component({
  selector: 'app-transportista-list',
  templateUrl: './transportista-list.component.html',
  styleUrls: ['./transportista-list.component.css'],
  providers : [CrudHttpClientServiceShared]
})
export class TransportistaListComponent implements OnInit {

  dataPagination: any;
  public flagRefresh:boolean =false ;
  id: number;
  sub: any;
  show: Boolean = true
  public transportistaModel: TransportistaModel;
  public transportistasModel: TransportistaModel[];

  public titulo: string = "Transportista";

  //-comandos obligatorios para la paginacion-//
  
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared, private activateRote:ActivatedRoute) { 

   
  }

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
          this.transportistasModel = res.data;
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
    this.sub = this.activateRote.params.subscribe(
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
    //this.flagRefresh = false;
  }

  delete(e){
 
    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de eliminar el punto de partida en : " + e.direccion ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      
      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idTransportista,"transportista","delete").subscribe(
          res=>{
            swal(
              'Deleted!',
              'El registro fue eliminado.',
              'success'
            )
       
             
             this.refreshPage = !this.refreshPage;
                
          
          },
          error=>{
           
            swal(
              'Deleted!',
              'El Registro No se elimino.' +  error ,
              'error'
            )
          }
        )
   
      }
    })
  }

}
