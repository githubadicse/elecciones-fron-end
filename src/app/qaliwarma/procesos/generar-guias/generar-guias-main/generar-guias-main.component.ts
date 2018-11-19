import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerarGuiasService } from '../generar-guias.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-generar-guias-main',
  templateUrl: './generar-guias-main.component.html',
  styleUrls: ['./generar-guias-main.component.css'],
  providers: [GenerarGuiasService]
})
export class GenerarGuiasMainComponent implements OnInit {

  dataForm: any;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public serieGuia = 1;
  public numeroGuia = 1;
  public titulo = "GENERAR GUIAS DE REMISION";
  public idProveedorCliente:number;

  constructor(private formBuilder: FormBuilder,private generarGuiasService:GenerarGuiasService) { }

  ngOnInit() {
    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    this.buildForm();
  }

  buildForm(){
    this.dataForm = this.formBuilder.group({
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.numeroEntrega, Validators.required],
      serieGuia:[this.serieGuia,Validators],
      numeroGuia: [this.numeroGuia,Validators],
      idProveedorCliente : [this.idProveedorCliente,Validators]
     
   
    })
  }

  crearGuiaRemision(){
    this.generarGuiasService.crearGuiaRemision(this.anno,this.numeroEntrega,this.serieGuia,this.numeroGuia).subscribe(
      res=> {
        console.log("Fin Creacion Guias");
      },
      error=>{
        debugger;
        swal(
          'Proceso!',
          'Error En el proceso.' + error.message,
          'error'
        )
      },
      ()=> {
        swal("Proceso concluido");
      }
    )
  }

}
