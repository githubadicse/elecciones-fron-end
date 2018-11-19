import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CargarInfoService } from '../cargar-info.service';

@Component({
  selector: 'app-cargar-info-main',
  templateUrl: './cargar-info-main.component.html',
  styleUrls: ['./cargar-info-main.component.css'],
  providers : [CargarInfoService]
})
export class CargarInfoMainComponent implements OnInit {

  dataForm: any;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "CARGAR INFORMACION DE VOLUMENES"
  constructor(private formBuilder: FormBuilder,private cargarInfoService:CargarInfoService) { }

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

  cargarInfo(){
    this.cargarInfoService.cargarInfo(this.anno,this.numeroEntrega).subscribe(

      res => {
        console.log("Fin");
      }
    )
  }
}
