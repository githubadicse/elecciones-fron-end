import { Component, OnInit } from '@angular/core';
import { ChoferModel } from '../chofer-model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { isUndefined } from 'util';
import swal from 'sweetalert2'
import { CrudHttpClientServiceShared } from '../../../../shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'app-chofer-edit',
  templateUrl: './chofer-edit.component.html',
  styleUrls: ['./chofer-edit.component.css']
})
export class ChoferEditComponent implements OnInit {

  choferForm: any;
  id: number;
  sub: any;
  public flagRefreshReturn:boolean=false;

  public choferModel:ChoferModel=new ChoferModel();

  constructor(

    private activateRoute: ActivatedRoute, 
   
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared:CrudHttpClientServiceShared

  ) { 

    this.sub = this.activateRoute.params.subscribe(
      params => {
        this.id = +params['id'];
  
        
      }
    ); 

  }

  ngOnInit() {
    this.buildForm();
   

    if(this.id != 0)
    this.edit();
  }

  buildForm() {
    this.choferForm = this.formBuilder.group({
      idChofer: [this.choferModel.idChofer, Validators.required],
      nombres: [this.choferModel.nombres, Validators.required],
      dni: [this.choferModel.dni, Validators.required],
      numeroBrevete :  [this.choferModel.numeroBrevete, Validators.required]
   
    })

  }

  edit(){

    this.crudHttpClientServiceShared.edit(this.id,"chofer","edit").subscribe(
      res => {
        this.choferModel = this.newModel(res);
        this.buildForm();
        
      },
      error=>console.log(error),
      ()=>{
      
      }
    )


  }

 
  create(){
    this.crudHttpClientServiceShared.create(this.choferModel ,"chofer","create").subscribe(

      res=>{
        this.choferModel = this.newModel(res);
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
    this.crudHttpClientServiceShared.update(this.choferModel,"chofer","update").subscribe(

     
      res=>{
        this.choferModel = this.newModel(res);
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

  newModel(res){
    return new ChoferModel(res.idChofer,res.dni,res.numeroBrevete,res.nombres);
  }

}
