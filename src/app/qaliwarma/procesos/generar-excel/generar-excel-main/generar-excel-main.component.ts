import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { GenerarExcelService } from '../generar-excel.service';
import swal from 'sweetalert2';
import { TimeInterval } from "rxjs";

@Component({
  selector: 'app-generar-excel-main',
  templateUrl: './generar-excel-main.component.html',
  styleUrls: ['./generar-excel-main.component.css'],
  providers : [GenerarExcelService]
})
export class GenerarExcelMainComponent implements OnInit {

  private alive: boolean;
  
  dataForm: any;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "GENERA ARCHIVO EXCEL PARA MOSTRAR VOLUMENES CALCULADOS"
  blocked:boolean = false;
  
  tbody:any;
  constructor(private formBuilder: FormBuilder,private generarExcelService:GenerarExcelService) { }

  ngOnInit() {
    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    this.buildForm();
    this.alive = true;
    // IntervalObservable.create(10000)
    // .takeWhile( ()=> this.alive)
    // .subscribe( ()=> {
    //   console.log ( "observable ............")
    // })
  }
  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
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
    let nombre = "VOLUMEN -"+this.anno + "-" + this.numeroEntrega + "-" + d.getDate()+"-"+d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds();
    this.generarExcelService.getItemVolumen (this.anno,this.numeroEntrega).subscribe(
      
      res => {
       
        if (res.body.size == 0) {
          //this.showError();
          console.log("Errorr")
          
          return;
        }
        //console.log(res.headers.get('X-Custom-Header'));
        console.log(res)
        debugger;
        let mediaType = res.headers.get("Content-Type");
        console.log(mediaType)
        let blob = new Blob([res.body], { type: mediaType });
        //let file = new window.Blob([res.body], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(blob);

        a.href = fileURL;
        a.download = nombre +".xlsx";
        a.click();
        window.URL.revokeObjectURL(fileURL);

        //window.open(fileURL);

        //let urlCreator = window.URL;
        //let url = urlCreator.createObjectURL(blob);
        //window.open(url,"titulo","height=600, width=600, status=yes, toolbar=no, menubar=no, location=no") ;


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
