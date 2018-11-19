import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemEntregaService } from '../../item-entrega/item-entrega.service';
import { ItemEntregaModel } from '../../item-entrega/item-entrega-model';
import { RegionAlimentariaService } from '../../region-alimentaria/region-alimentaria.service';
import { RegionAlimentariaModel } from '../../region-alimentaria/region-alimentaria-model';
import { debuglog, isUndefined } from 'util';
import { error } from 'selenium-webdriver';

import { CatalogoProductoModel } from '../catalogo-producto-model';
import { CatalogoProductoService } from '../catalogo-producto.service';
import { HorarioAlimentacionModel } from '../../horario-alimentacion/horario-alimentacion-model';
import { HorarioAlimentacionService } from '../../horario-alimentacion/horario-alimentacion.service';
import { CatalogoBonificacionModel } from '../../catalogo-bonificacion/catalogo-bonificacion-model';
import { CatalogoBonificacionService } from '../../catalogo-bonificacion/catalogo-bonificacion.service';
import { CatalogoMarcaModel } from '../../catalogo-marca/catalogo-marca-model';
import swal from 'sweetalert2'

@Component({
  selector: 'app-catalogo-producto-lista-items',
  templateUrl: './catalogo-producto-lista-items.component.html',
  styleUrls: ['./catalogo-producto-lista-items.component.css'],
  providers : [ItemEntregaService,RegionAlimentariaService,CatalogoProductoService,HorarioAlimentacionService,CatalogoBonificacionService]
})
export class CatalogoProductoListaItemsComponent implements OnInit {
  id: any;
  sub: any;
  public itemEntregaModel:ItemEntregaModel;
  public itemEntregasModel:ItemEntregaModel[];
  public regionAlimentariasModel:RegionAlimentariaModel[];
  public regionAlimentariaModel:RegionAlimentariaModel;

  public catalogoProductosQaliwarma:CatalogoProductoModel[];
  public catalogoProductoQaliwarma:CatalogoProductoModel;

  public horarioAlimentacionsModel:HorarioAlimentacionModel[];
  public horarioAlimentacionModel:HorarioAlimentacionModel;

  public catalogoBonificacionModel:CatalogoBonificacionModel;
  public catalogoBonificacionsModel:CatalogoBonificacionModel[];

  public catalogoMarcaModel:CatalogoMarcaModel;
  public catalogoMarcasModel:CatalogoMarcaModel[];

  public periodo:number;
  public nEntrega:number=1;
 
  constructor(private route:ActivatedRoute, private itemEntregaService:ItemEntregaService, 
    private regionAlimentariaService:RegionAlimentariaService
    ,private catalogoProductoService:CatalogoProductoService
    ,private horarioAlimentacionService:HorarioAlimentacionService
    ,private catalogoBonificacionService:CatalogoBonificacionService
  ) { 

    this.sub = this.route.params.subscribe(
      params => {
        
        this.id = params['id'];
      }
    );
  }

  ngOnInit() {
    this.nEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    let f = new Date();
    this.periodo = f.getFullYear();
    this.getItemsPorPeriodo(this.periodo);
    this.getRegionAlimentarias();
    this.getAllCatalogoProucto();
    this.getHorariosAlimentacion();
  }



  getHorariosAlimentacion(){
    this.horarioAlimentacionService.getAll().subscribe(

      res => {
        this.horarioAlimentacionsModel = res;
      },
      error => console.log(error),
      ()=>console.log(this.horarioAlimentacionsModel)
    )
  }

  getItemsPorPeriodo(periodo:number){

    this.itemEntregaService.getItems(this.periodo).subscribe(
      res => {
        this.itemEntregasModel = res;
      }
    )

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

  getRegionAlimentarias(){
    this.regionAlimentariaService.getAll().subscribe(

      res => {
        this.regionAlimentariasModel = res
   /*      .map(
          item => {
            
            return new RegionAlimentariaModel(
              item.idRegionAlimentaria,
              item.dscRegionAlimentaria
            )
          }
        ) */
        
      },
      error=>{

      },
      ()=>{
        console.log(this.regionAlimentariasModel)     
      }
    )

 
  }

  setRegionAlimentaria(e){
    this.sendConsulta();
  }
  setCatalogoProducto(e){
    this.sendConsulta();
  }
  setHorarioAlimentacion(e){
    this.sendConsulta();
  }

  sendConsulta(){
   
    if(isUndefined(this.catalogoProductoQaliwarma)){
      return;
    }
    if( isUndefined( this.regionAlimentariaModel)){
      return;
    }
    if(isUndefined(this.horarioAlimentacionModel)){
      return;
    }
    let idproducto = this.catalogoProductoQaliwarma.idCatalogoProductoQaliwarma;
    let idregion = this.regionAlimentariaModel.idRegionAlimentaria;
    let numeroEntrega = this.nEntrega;
    let idHorarioAlimentacion = this.horarioAlimentacionModel.idHorarioAlimentacion;


   
    this.catalogoBonificacionService.sendConsulta(idproducto,idregion,numeroEntrega,idHorarioAlimentacion).subscribe(

      res => {
        this.catalogoBonificacionsModel = res;
      },
      error=>console.log(error),
      ()=>{
        console.log(this.catalogoBonificacionsModel);
      }
      
    )


  }

  grabarCatalogoBonificacion(e){
    console.log(e);
    this.catalogoBonificacionService.save(e).subscribe(
      res => {
        this.catalogoBonificacionModel = res;
        e = res;
      },
      error => console.log(error),
      ()=>{ console.log(this.catalogoBonificacionModel);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Creado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    ) ;
  }

}
