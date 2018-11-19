import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { EliminarCalculoService } from '../eliminar-calculo.service';

@Component({
  selector: 'app-eliminar-calculo-main',
  templateUrl: './eliminar-calculo-main.component.html',
  styleUrls: ['./eliminar-calculo-main.component.css'],
  providers : [EliminarCalculoService]
})
export class EliminarCalculoMainComponent implements OnInit {

  dataForm: any;
  blocked :boolean= false;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "ELIMINAR CALCULO"
  constructor(private formBuilder: FormBuilder,private eliminarCalculoService:EliminarCalculoService) { }

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

  eliminar(){
    this.blocked = true;
   
    this.eliminarCalculoService.eliminarCalculo (this.anno,this.numeroEntrega).subscribe(

      res => {
        console.log("Fin");
      },
      error=>{
        this.blocked = false;
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Error servidor : ' + error
         
        })
      },
      ()=>{
        this.blocked = false;
        swal("Bien!", "El Proceso finalizo correctamente!", "success")
      }
      
    )


    
  }

}
