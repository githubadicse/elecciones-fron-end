import { Component, OnInit } from '@angular/core';
import { CatalogoProductoModel } from '../catalogo-producto-model';
import { NivelEducacionModel } from '../../nivel-educacion/nivel-educacion-model';
import { CatalogoProductoService } from '../catalogo-producto.service';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ProductoPresentacionModel } from '../../producto-presentacion/producto-presentacion-model';
import { ProductoPresentacionService } from '../../producto-presentacion/producto-presentacion.service';
import { CatalogoMultiplicarNivelEducacionService } from '../../catalogo-multiplicar-nivel-educacion/catalogo-multiplicar-nivel-educacion.service';
import { CatalogoMultiplicarNivelEducacionModel } from '../../catalogo-multiplicar-nivel-educacion/catalogo-multiplicar-nivel-educacion-model';


@Component({
  selector: 'app-producto-multiplicar-nivel-educacion',
  templateUrl: './producto-multiplicar-nivel-educacion.component.html',
  styleUrls: ['./producto-multiplicar-nivel-educacion.component.css'],
  providers : [CatalogoProductoService,CrudHttpClientServiceShared,ProductoPresentacionService,CatalogoMultiplicarNivelEducacionService]
})
export class ProductoMultiplicarNivelEducacionComponent implements OnInit {

  

  public periodo:number;
  public nEntrega:number=1;

  
  public catalogoProductosQaliwarma:CatalogoProductoModel[];
  public catalogoProductoQaliwarma:CatalogoProductoModel;

  public nivelEducacionModel:NivelEducacionModel;
  public nivelEducacionsModel:NivelEducacionModel[];

  public productoPresentacionModel:ProductoPresentacionModel;
  public productoPresentacionsModel:ProductoPresentacionModel[];

  public catalogoMultiplicarNivelEducacionModel:CatalogoMultiplicarNivelEducacionModel;
  public catalogoMultiplicarNivelEducacionsModel:CatalogoMultiplicarNivelEducacionModel[];

  constructor(private catalogoProductoService:CatalogoProductoService, 
    private crudHttpClientServiceShared:CrudHttpClientServiceShared,
    private productoPresentacionService:ProductoPresentacionService,
    private catalogoMultiplicarNivelEducacionService:CatalogoMultiplicarNivelEducacionService
  ) { }

  ngOnInit() {
    this.nEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    let f = new Date();
    this.periodo = f.getFullYear();
 
    this.getAllCatalogoProucto();
    this.getAllNivelEducacion();
  }

  getAllCatalogoProucto(){
    this.catalogoProductoService.getAll()
      .subscribe(
        res => {
          this.catalogoProductosQaliwarma = res;
          
        },
        error => {console.log(error)},
        () => {
          console.log(this.catalogoProductosQaliwarma);
        }
      )
   
  }

  getAllNivelEducacion(){
    this.crudHttpClientServiceShared.getall("nivelEducacion","getAll")
      .subscribe( res=> {
        debugger;
        this.nivelEducacionsModel = res;
      })
      
  }


  getProductoPresentacionByIdProductoAnnoNumeroEntrega(){
    let idProducto = this.catalogoProductoQaliwarma.idCatalogoProductoQaliwarma;
    let anno = this.periodo;
    let numeroEntrega = this.nEntrega;

    this.productoPresentacionService.getPresentacionByIdAnnoNumeroEntrega(idProducto,anno,numeroEntrega)
    .subscribe(
      res=>{
        this.productoPresentacionsModel = res.map(
          item => {
            return new ProductoPresentacionModel(item.idProductoPresentacion,item.catalogoProductoQaliwarma,item.cantidadPresentacion,item.dscPresentacion,item.anno,item.numeroEntrega,item.factorVolumenPresentacion);
          }
        )
      }
    )


  }

  
  setProductoPresentacion(e){
    this.productoPresentacionModel = e;
    this.sendConsulta();

  }
  setNivelEducacion(e){
    this.nivelEducacionModel = e;
    this.sendConsulta();
  }

  setCatalogoProducto(e){
    this.getProductoPresentacionByIdProductoAnnoNumeroEntrega();
    this.sendConsulta();
  }

  sendConsultaBefore(){
    this.getProductoPresentacionByIdProductoAnnoNumeroEntrega();
    this.sendConsulta();
  }
  sendConsulta(): any {

    if(!this.periodo){
      console.log("No definio periodo");
      return;  
    }
     

    if(!this.nEntrega){
       console.log("No definio numero entrega");
    return;
    }
   

    if(!this.catalogoProductoQaliwarma){
      console.log("No definio catalogoProductoQaliwarma");
      return;
    }
    if(!this.productoPresentacionModel){
      console.log("No definio productoPresentacionModel");
      return;
    }

    if(!this.nivelEducacionModel){
      console.log("No definio nivelEducacionModel");
      return;
    }

    let model = {"anno":this.periodo,"numeroEntrega":this.nEntrega,
            "idProducto":this.catalogoProductoQaliwarma.idCatalogoProductoQaliwarma,
            "idProductoPresentacion":this.productoPresentacionModel.idProductoPresentacion,
          "idNivelEducacion":this.nivelEducacionModel.idNivelEducacion};

    this.catalogoMultiplicarNivelEducacionService.getCatalogoMultiplicarByPresentacion(model) 
      .subscribe(res=> {
        this.catalogoMultiplicarNivelEducacionsModel = res.map(
          item=> {
            return new CatalogoMultiplicarNivelEducacionModel(item.idCatalogoMultiplicarNivelEducacion,item.nivelEducacion,item.factor,item.productoPresentacion,item.catalogoProductoQaliwarma,item.anno,item.numeroEntrega );
          }
        )
        console.log(this.catalogoMultiplicarNivelEducacionsModel);
      });
  }
}
