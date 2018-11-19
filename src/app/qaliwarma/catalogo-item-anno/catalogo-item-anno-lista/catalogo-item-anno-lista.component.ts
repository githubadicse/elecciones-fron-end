import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CatalogoItemAnnoModel } from '../catalogo-item-anno-model';
import { CatalogoItemAnnoService } from '../catalogo-item-anno.service';
import { BlockUIModule } from 'primeng/primeng';
@Component({
  selector: 'app-catalogo-item-anno-lista',
  templateUrl: './catalogo-item-anno-lista.component.html',
  styleUrls: ['./catalogo-item-anno-lista.component.css'],
  providers:[CatalogoItemAnnoService]
})
export class CatalogoItemAnnoListaComponent implements OnInit {


  catalogoItemAnnoModel:CatalogoItemAnnoModel[];
  blocked:boolean = false;
  //@ViewChild('tbody') tbody: ElementRef;
 tbody:any;
  constructor(
    private catalogoItemAnnoService:CatalogoItemAnnoService
  ) { }

  ngOnInit() {
  }


  getListaItems(){
    this.blocked = true;
    this.catalogoItemAnnoService.getItemPorCategoriaDetallado(2018)
    .subscribe(
      res => {
        this.blocked = false;
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


  getItemVolumen(){
    this.blocked = true;
    this.catalogoItemAnnoService.getItemVolumen(2018,1)
    .subscribe(
      res => {
        this.blocked = false;
        if (res.body.size == 0) {
      
          console.log("Errorr")
          return;
        }
        
        console.log(res)
        
        let mediaType = res.headers.get("Content-Type");
        console.log(mediaType)
        let blob = new Blob([res.body], { type: mediaType });
      
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      


      },
      err => { console.log("error... al mostrar imagen...") }
      ,
      () => { console.log("completo subid ") }
      );
    
  }
}
