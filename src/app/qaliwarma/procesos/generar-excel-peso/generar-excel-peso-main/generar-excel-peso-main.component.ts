import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerarExcelPesoService } from '../generar-excel-peso.service';

@Component({
  selector: 'app-generar-excel-peso-main',
  templateUrl: './generar-excel-peso-main.component.html',
  styleUrls: ['./generar-excel-peso-main.component.css'],
  providers : [GenerarExcelPesoService]
})
export class GenerarExcelPesoMainComponent implements OnInit {

  dataForm: any;
  public anno:number = 2018;
  public numeroEntrega:number = 1;
  public titulo = "GENERA ARCHIVO EXCEL PARA MOSTRAR VOLUMENES Y PESOS"
  blocked:boolean = false;
  
  tbody:any;
  constructor(private formBuilder: FormBuilder,private generarExcelPesoService:GenerarExcelPesoService) { }

  ngOnInit() {

    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    let d = new Date();
    this.anno = d.getFullYear();
    this.buildForm();
  }

  buildForm(){
    this.dataForm = this.formBuilder.group({
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.numeroEntrega, Validators.required],
     
   
    })
  }

  generar(){
    this.generarExcelPesoService.getItemVolumen (this.anno,this.numeroEntrega).subscribe(
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
        window.open(fileURL);

        //let urlCreator = window.URL;
        //let url = urlCreator.createObjectURL(blob);
        //window.open(url,"titulo","height=600, width=600, status=yes, toolbar=no, menubar=no, location=no") ;


      },
      err => { console.log("error... al mostrar imagen...") }
      ,
      () => { console.log("completo subid ") }
      );
    
  }

}
