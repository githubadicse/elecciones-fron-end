import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CargarInfoService } from '../../cargar-info/cargar-info.service';
import { CalcularVolumenService } from '../calcular-volumen.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-calcular-volumen-main',
  templateUrl: './calcular-volumen-main.component.html',
  styleUrls: ['./calcular-volumen-main.component.css'],
  providers : [CalcularVolumenService]
})
export class CalcularVolumenMainComponent implements OnInit {

  dataForm: any;
  blocked :boolean= false;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "CALCULAR VOLUMENES A PRESENTACION"
  constructor(private formBuilder: FormBuilder,private calcularVolumenService:CalcularVolumenService) { }

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

  calcular(){
    this.blocked = true;
    this.calcularVolumenService.calcularVolumen (this.anno,this.numeroEntrega).subscribe(

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
