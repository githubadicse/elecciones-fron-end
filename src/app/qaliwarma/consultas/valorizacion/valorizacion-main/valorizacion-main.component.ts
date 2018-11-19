import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../../shared/servicio/crudHttpClient.service.shared';
import { ValorizacionService } from '../valorizacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-valorizacion-main',
  templateUrl: './valorizacion-main.component.html',
  styleUrls: ['./valorizacion-main.component.css'],
  providers:[ValorizacionService]
})
export class ValorizacionMainComponent implements OnInit {

  dataForm: any;
  blocked :boolean= false;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "VALORIZACION DE ENTREGA"

  constructor(private formBuilder: FormBuilder, private valorizacionService:ValorizacionService) { }

  ngOnInit() {

    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    this.buildForm();
  }

  buildForm(){
    this.dataForm = this.formBuilder.group({
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.numeroEntrega, Validators.required],        
    })
  }

  generar(){
    this.blocked = true;

   
    this.valorizacionService.generarReporte (this.anno,this.numeroEntrega).subscribe(
      res => {
    
        console.log(res)
   
      },
      err => { 
        this.blocked = false;
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Error servidor : ' + err
         
        })
       }
      ,
      () => { 
        this.blocked = false;
        swal("Bien!", "El Proceso finalizo correctamente!", "success")
       }
      );
    
  }
}
