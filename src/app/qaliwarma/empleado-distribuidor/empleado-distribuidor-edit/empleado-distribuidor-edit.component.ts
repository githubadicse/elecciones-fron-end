import { Component, OnInit } from '@angular/core';
import { EmpleadoDistribuidorModel } from '../empleado-distribuidor-model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { isUndefined } from 'util';
import swal from 'sweetalert2';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';

@Component({
  selector: 'app-empleado-distribuidor-edit',
  templateUrl: './empleado-distribuidor-edit.component.html',
  styleUrls: ['./empleado-distribuidor-edit.component.css'],
  providers : [UtilitariosAdicse]
})
export class EmpleadoDistribuidorEditComponent implements OnInit {

  empleadoDistribuidorForm: any;
  flagRefreshReturn: boolean = false;
  public id: any;
  sub: any;

  public empleadoDistribuidorModel:EmpleadoDistribuidorModel= new EmpleadoDistribuidorModel();

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared,
    private utilitariosAdicse:UtilitariosAdicse


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
    this.buildForm();
   

    if(this.id != 0){
     
      this.edit();
    }
    
  }

  buildForm() {
    this.empleadoDistribuidorForm = this.formBuilder.group({
      idEmpleadoDistribuidor: [this.empleadoDistribuidorModel.idEmpleadoDistribuidor],
      dni: [this.empleadoDistribuidorModel.dni, Validators.required],
      nombres: [this.empleadoDistribuidorModel.nombres, Validators.required],
      email: [this.empleadoDistribuidorModel.email, Validators.required],
      telefonos: [this.empleadoDistribuidorModel.telefonos, Validators.required],
      celularAsignado: [this.empleadoDistribuidorModel.celularAsignado, Validators.required],
      imei: [this.empleadoDistribuidorModel.imei, Validators.required]
   
    })

  }

  edit(){

  
    this.crudHttpClientServiceShared.edit(this.id,"empleadoDistribuidor","edit").subscribe(
      res => {
        this.empleadoDistribuidorModel = new EmpleadoDistribuidorModel(res.idEmpleadoDistribuidor,res.dni,res.nombres,res.email,res.telefonos,res.celularAsignado,res.imei);
        this.buildForm();
        
      },
      error=>console.log(error),
      ()=>{
        console.log(this.empleadoDistribuidorModel);
      }
    )


  }


  create(){
    let d = new Date();
    let dia = d.getDay().toString();
    let mes = d.getMonth().toString();
    let year = d.getFullYear().toString();

    this.empleadoDistribuidorModel.idEmpleadoDistribuidor = dia+mes+year+"-"+ this.utilitariosAdicse.randomString();
    this.crudHttpClientServiceShared.create(this.empleadoDistribuidorModel,"empleadoDistribuidor","create").subscribe(


      res=>{
        this.empleadoDistribuidorModel = new EmpleadoDistribuidorModel(res.idEmpleadoDistribuidor,res.dni,res.nombres,res.email,res.telefonos,res.celularAsignado,res.imei);
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

  update(){
    this.crudHttpClientServiceShared.update(this.empleadoDistribuidorModel,"empleadoDistribuidor","update").subscribe(

     
      res=>{
        this.empleadoDistribuidorModel = new EmpleadoDistribuidorModel(res.idEmpleadoDistribuidor,res.dni,res.nombres,res.email,res.telefonos,res.celularAsignado,res.imei);
        this.buildForm();
        this.flagRefreshReturn = true;
      },
      error=>console.log(error),
      ()=>{
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Actualizado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )

  }

}
