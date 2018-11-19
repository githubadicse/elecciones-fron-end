import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuntoPartidaService } from '../punto-partida.service';
import { PuntoPartidaModel } from '../punto-partida-model';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2'
import { CrudHttpClientServiceShared } from '../../../../shared/servicio/crudHttpClient.service.shared';


@Component({
  selector: 'app-punto-partida-edit',
  templateUrl: './punto-partida-edit.component.html',
  styleUrls: ['./punto-partida-edit.component.css'],
  providers : [PuntoPartidaService, CrudHttpClientServiceShared]
})
export class PuntoPartidaEditComponent implements OnInit {

  [x: string]: any;
  puntoPartidaForm: any;
  id: number;
  sub: any;
  public flagRefreshReturn:boolean=false;

  public puntoPartidaModel:PuntoPartidaModel=new PuntoPartidaModel();

  constructor(private activateRoute: ActivatedRoute, 
    private puntoPartidaService:PuntoPartidaService,
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared:CrudHttpClientServiceShared) {

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


  edit(){

    this.crudHttpClientServiceShared.edit(this.id,"puntoPartida","edit").subscribe(
      res => {
        this.puntoPartidaModel = new PuntoPartidaModel(res.idPuntoPartida,res.direccion);
        this.buildForm();
        
      },
      error=>console.log(error),
      ()=>{
      
      }
    )


  }

 
  create(){
    this.crudHttpClientServiceShared.create(this.puntoPartidaModel,"puntoPartida","create").subscribe(

      res=>{
        this.puntoPartidaModel = new PuntoPartidaModel(res.idPuntoPartida,res.direccion);
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
    this.crudHttpClientServiceShared.update(this.puntoPartidaModel,"puntoPartida","update").subscribe(

     
      res=>{
        this.puntoPartidaModel = new PuntoPartidaModel(res.idPuntoPartida,res.direccion);
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

  buildForm() {
    this.puntoPartidaForm = this.formBuilder.group({
      idPuntoPartida: [this.puntoPartidaModel.idPuntoPartida, Validators.required],
      direccion: [this.puntoPartidaModel.direccion, Validators.required]
   
    })

  }

}
