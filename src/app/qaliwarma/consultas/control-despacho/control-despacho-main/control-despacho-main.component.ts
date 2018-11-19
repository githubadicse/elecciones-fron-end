import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ControlDespachoService } from '../control-despacho.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-control-despacho-main',
  templateUrl: './control-despacho-main.component.html',
  styleUrls: ['./control-despacho-main.component.css'],
  providers : [ControlDespachoService]
})
export class ControlDespachoMainComponent implements OnInit {
  dataForm: any;
  blocked :boolean= false;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "REPORTE CONTROL DESPACHO"
  constructor(private formBuilder: FormBuilder,private controlDespachoService:ControlDespachoService) { }

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

    
    let d = new Date();
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    let nombre = "CONTROL DESPACHO-"+this.anno + "-" + this.numeroEntrega + "-" + d.getDate()+"-"+d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds();
    this.controlDespachoService.generarReporte (this.anno,this.numeroEntrega).subscribe(
      res => {
       
        if (res.body.size == 0) {  
          console.log("Errorr")          
          return;
        }
     
        console.log(res)
        
        let mediaType = res.headers.get("Content-Type");
        console.log(mediaType)
        let blob = new Blob([res.body], { type: mediaType });
     
        var fileURL = URL.createObjectURL(blob);
        a.href = fileURL;
        a.download = nombre +".xlsx";
        a.click();
        window.URL.revokeObjectURL(fileURL);

   
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
