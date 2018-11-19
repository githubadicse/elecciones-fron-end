import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { isUndefined } from 'util';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { EmpleadoDistribuidorModel } from '../../empleado-distribuidor/empleado-distribuidor-model';
import { RequerimientoVolumen001Model } from '../../requerimiento-volumen-001/requerimiento-volumen-001-model';
import { RutaDistribucionDetalleModel } from '../ruta-distribucion-detalle-model';
import { RutaDistribucionModel } from '../ruta-distribucion-model';
import { RutaDistribucionService } from '../ruta-distribucion.service';

@Component({
  selector: 'app-ruta-distribucion-detalle',
  templateUrl: './ruta-distribucion-detalle.component.html',
  styleUrls: ['./ruta-distribucion-detalle.component.css'],
  providers: [UtilitariosAdicse, CrudHttpClientServiceShared,RutaDistribucionService]
})
export class RutaDistribucionDetalleComponent implements OnInit {

  id: any;
  sub: any;

  isBuscador = false;
  flagRefreshReturn: boolean;

  rutaDistribucionForm: any;

  public totalAcum:number = 0;
  public cantidaIE = 0;

  show: boolean = true;
  anno: number;
  public rutaDistribucionModel: RutaDistribucionModel = new RutaDistribucionModel();
  public empleadoDistribuidor: EmpleadoDistribuidorModel = new EmpleadoDistribuidorModel();
  public rutaDistribucionDetalleModel: RutaDistribucionDetalleModel;
  public rutaDistribucionDetallesModel: RutaDistribucionDetalleModel[];
  public requerimientoVolumen001: RequerimientoVolumen001Model = new RequerimientoVolumen001Model();

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared, private utilitariosAdicse: UtilitariosAdicse,
    private rutaDistribucionService:RutaDistribucionService

  ) {

    this.sub = this.activateRoute.params.subscribe(
      params => {
        this.id = params['id'];
        if (isUndefined(params['flagRefresh'])) {
          return;
        }
      }
    );
  }

  ngOnInit() {

    let d = new Date();
    this.anno = parseInt( localStorage.getItem("anno"));
    
    this.buildForm();

    if (this.id != 0) {
      this.edit();
    } else {
      this.rutaDistribucionModel.anno = d.getFullYear();
    }
  }

  ocultarLista() {
    this.show = false;

  }

  eventBack(e) {
    this.show = true;
    if (!e) {

      return;
    }

    

    this.requerimientoVolumen001 = e;

    //verificamos que no exista el codigo modular en la lista
    let existe:boolean = false;
    this.rutaDistribucionModel.rutaDistribucionDetalles.forEach( item=>{
   
      let codigoModularItem = item.requerimientoVolumen001.codigomodularIinstitucionEducativa.codigoModular;
      let codigoModularAgregado = this.requerimientoVolumen001.codigomodularIinstitucionEducativa.codigoModular;
      if(codigoModularItem == codigoModularAgregado){
        swal('El codigo modular <b>' +   codigoModularItem  + '</b> ya fue agregado a la lista')
        existe = true;
      }
    })

    if(existe){
      return;
    }
    let rutaDistribucionDetalle = new RutaDistribucionDetalleModel();
    rutaDistribucionDetalle.idRutaDistribucionDetalle = this.rutaDistribucionModel.idRutaDistribucion + this.utilitariosAdicse.randomString();
    rutaDistribucionDetalle.requerimientoVolumen001 = this.requerimientoVolumen001;

    rutaDistribucionDetalle.rutaDistribucion = new RutaDistribucionModel(this.rutaDistribucionModel.idRutaDistribucion,
      this.rutaDistribucionModel.dscRutaDistribucion,
      this.rutaDistribucionModel.anno,this.rutaDistribucionModel.numeroEntrega,this.rutaDistribucionModel.empleadoDistribuidor
    )
    
    rutaDistribucionDetalle.orden = 1//this.rutaDistribucionDetallesModel.length==null?1:this.rutaDistribucionDetallesModel.length + 1;

    this.rutaDistribucionDetalleModel = rutaDistribucionDetalle;
    this.rutaDistribucionModel.rutaDistribucionDetalles.push(this.rutaDistribucionDetalleModel);
    this.rutaDistribucionModel.rutaDistribucionDetalles = this.rutaDistribucionModel.rutaDistribucionDetalles.slice();

    let json = JSON.stringify(this.rutaDistribucionDetalleModel);
    
    let url = this.crudHttpClientServiceShared.create(this.rutaDistribucionDetalleModel,"rutaDistribucionDetalle","create").subscribe(

      res=>{
        this.rutaDistribucionDetalleModel.idRutaDistribucionDetalle = res.idRutaDistribucionDetalle;
      },
      error=>(console.log)
      ,
      ()=>console.log(this.rutaDistribucionDetalleModel)

    )

    //sumamos el acumulado
    this.sumTotalAcum();

  }

  sumTotalAcum(){
    this.totalAcum = 0;
    this.cantidaIE = 0;
    this.rutaDistribucionModel.rutaDistribucionDetalles.forEach(
      item => {
        let req1 = item.requerimientoVolumen001;
        let pesoTotal = req1.pesoTotal;
        this.totalAcum =this.totalAcum+pesoTotal;

        this.cantidaIE++;
      }
    )
  }



  buildForm() {
    this.rutaDistribucionForm = this.formBuilder.group({
      idRutaDistribucion: [this.rutaDistribucionModel.idRutaDistribucion, Validators.required],
      dscRutaDistribucion: [this.rutaDistribucionModel.dscRutaDistribucion, Validators.required],
      anno: [this.rutaDistribucionModel.anno, Validators.required],
      numeroEntrega: [this.rutaDistribucionModel.numeroEntrega, Validators.required],
      nombres: [this.rutaDistribucionModel.empleadoDistribuidor.nombres, Validators.required]
    })

  }


  edit() {

    this.crudHttpClientServiceShared.edit(this.id, "rutaDistribucion", "editDetalle").subscribe(
      res => {
   
        this.rutaDistribucionModel =  
        new RutaDistribucionModel(res.idRutaDistribucion, res.dscRutaDistribucion, res.anno, res.numeroEntrega, res.empleadoDistribuidor,res.chofer,  res.vehiculo, 
          res.transportista,res.fechaDisttribucion,  res.rutaDistribucionDetalles
        );
      
        this.buildForm();
        this.sumTotalAcum();

      },
      error => console.log(error),
      () => {
        console.log(this.rutaDistribucionModel);
      }
    )


  }

  create(){
    
    this.crudHttpClientServiceShared.create(this.rutaDistribucionModel ,"rutaDistribucion","create").subscribe(

      res=>{
        this.rutaDistribucionModel = new RutaDistribucionModel(res.idRutaDistribucion, res.dscRutaDistribucion, res.anno, res.numeroEntrega, res.empleadoDistribuidor, res.rutaDistribucionDetalle);
        this.buildForm();
        this.flagRefreshReturn = true;
      },
      error=>console.log(error),
      ()=>{
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Creado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  delete(e) {

    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de quitar el codigo modular : " + e.requerimientoVolumen001.codigomodularIinstitucionEducativa.codigoModular,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {

      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idRutaDistribucionDetalle, "rutaDistribucionDetalle", "delete").subscribe(
          res => {
            swal(
              'Deleted!',
              'El registro fue eliminado.',
              'success'
            )
            this.rutaDistribucionModel.rutaDistribucionDetalles.splice(e,1);
            this.rutaDistribucionModel.rutaDistribucionDetalles = this.rutaDistribucionModel.rutaDistribucionDetalles.slice();
            this.sumTotalAcum();
            this.edit();
            
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


  generarConsolidado(){
    let idRutaDistribucion = this.rutaDistribucionModel.idRutaDistribucion;
    let nombreRuta = this.rutaDistribucionModel.dscRutaDistribucion;
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    this.rutaDistribucionService.getBuildResumenExcel (idRutaDistribucion).subscribe(
      res => {
       
        if (res.body.size == 0) {
          //this.showError();
          console.log("Errorr")
          
          return;
        }
        
        //console.log(res.headers.get('X-Custom-Header'));
        console.log(res)
        
        let mediaType = res.headers.get("Content-Type");
        console.log(mediaType)
        let blob = new Blob([res.body], { type: mediaType });
        //let file = new window.Blob([res.body], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(blob);
        a.href = fileURL;
        a.download = nombreRuta +".xlsx";
        a.click();
        window.URL.revokeObjectURL(fileURL);
        //window.open(fileURL);

        //let urlCreator = window.URL;
        //let url = urlCreator.createObjectURL(blob);
        //window.open(url,"titulo","height=600, width=600, status=yes, toolbar=no, menubar=no, location=no") ;


      },
      err => { 
        swal(
          'Error!',
          'El reporte no se genero, posiblemente no genero guias de remision.' + err,
          'error'
        )
       }
      ,
      () => { console.log("completo subid ") }
      );
    
  }

  verkey(e){
    swal({
      type: 'success',
      title: 'key',
      text: e.idRutaDistribucionDetalle,
     
    })

  }

}
