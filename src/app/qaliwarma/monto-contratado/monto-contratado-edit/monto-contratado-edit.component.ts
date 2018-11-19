import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { MontoContratadoModel } from '../monto-contratado-model';
import { isUndefined } from 'util';
import swal from 'sweetalert2';

@Component({
  selector: 'app-monto-contratado-edit',
  templateUrl: './monto-contratado-edit.component.html',
  styleUrls: ['./monto-contratado-edit.component.css'],
  providers : [CrudHttpClientServiceShared]
})
export class MontoContratadoEditComponent implements OnInit {

  montoContratadoForm: any;
  flagRefreshReturn: boolean = false;
  id: any;
  sub: any;

  public montoContratadoModel:MontoContratadoModel= new MontoContratadoModel();

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared
  ) {
    this.sub = this.activateRoute.params.subscribe(
      params => {
        this.id = +params['id'];
        if (isUndefined(params['flagRefresh'])) {
          return;
        }
      }
    );

  }

  ngOnInit() {
    this.buildForm();
   

    if(this.id != 0)
    this.edit();
  }

  buildForm() {
    this.montoContratadoForm = this.formBuilder.group({
      idMontoContratado: [this.montoContratadoModel.idMontoContratado , Validators.required],
      nivelEducacion : [this.montoContratadoModel.nivelEducacion, Validators.required],
      horarioAlimentacion:[this.montoContratadoModel.horarioAlimentacion, Validators.required],
      precioUnitarioValor:[this.montoContratadoModel.precioUnitarioValor, Validators.required],
      precioUnitarioVenta : [this.montoContratadoModel.precioUnitarioVenta, Validators.required],
     
    })

  }

  edit(){

    this.crudHttpClientServiceShared.edit(this.id,"montoContratado","edit").subscribe(
      res => {
        this.montoContratadoModel = new MontoContratadoModel(res.idMontoContratado,res.entregaPorItem,res.nivelEducacion,res.horarioAlimentacion,res.precioUnitarioValor,res.precioUnitarioIgv,res.precioUnitarioVenta );
        this.buildForm();
        
      },
      error=>console.log(error),
      ()=>{
        console.log(this.montoContratadoModel);
      }
    )


  }


  create(){
    this.crudHttpClientServiceShared.create(this.montoContratadoModel,"montoContratado","create").subscribe(

      res=>{
        this.montoContratadoModel = new MontoContratadoModel(res.idMontoContratado,res.entregaPorItem,res.nivelEducacion,res.horarioAlimentacion,res.precioUnitarioValor,res.precioUnitarioIgv,res.precioUnitarioVenta);
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
    this.crudHttpClientServiceShared.update(this.montoContratadoModel,"montoContratado","update").subscribe(

     
      res=>{
        this.montoContratadoModel = new MontoContratadoModel(res.idMontoContratado,res.entregaPorItem,res.nivelEducacion,res.horarioAlimentacion,res.precioUnitarioValor,res.precioUnitarioIgv,res.precioUnitarioVenta);
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
