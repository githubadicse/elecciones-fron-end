import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';


@Injectable()
export class PeriodoalmacenService {

  constructor(private http:HttpClient,private configService:ConfigService) { }


  getPeriodoAlmacenByEstado(anno,mes,estado,idalmacen){
    
        let obj = { 'anno': anno, 'mes':mes, 'estado':estado,'idalmacen':idalmacen };
        let objser = this.configService.serialize(obj);
    
        let url = this.configService.getUrlSecurityRes("periodoalmacen", "getPeriodoAlmacenByEstado");
    
        return this.http.post(url, objser, {headers:this.configService.getHeaderHttpClientFormPost()})
         
          ;    
      }

  findAllByIniciooperacionesEqualsAndAlmacenIdalmacenEquals(idalmacen:number){
    let obj = {'inicio':1,'idalmacen':idalmacen};
    let objser = this.configService.serialize(obj);

	  let url = this.configService.getUrlSecurityRes ("periodoalmacen","findAllByIniciooperacionesEqualsAndAlmacenIdalmacenEquals");

        return this.http.post(url, objser ,{headers:this.configService.getHeaderHttpClientFormPost()})
            
            ;           
  }

  //buscar periodo con estado de apertura, por almacen
  findAllByAlmacenEqualsAndEstadoEquals(idalmacen,estado){
    let obj = {'estado':'A','idalmacen':idalmacen};
    let objser = this.configService.serialize(obj);

	  let url = this.configService.getUrlSecurityRes ("periodoalmacen","findAllByAlmacenEqualsAndEstadoEquals");

        return this.http.post(url, objser ,{headers:this.configService.getHeaderHttpClientFormPost()})
           
            ;           

  }

    //buscar periodo , por almacen
    findAllByAlmacen(idalmacen){
      let obj = {'idalmacen':idalmacen};
      let objser = this.configService.serialize(obj);
  
      let url = this.configService.getUrlSecurityRes ("periodoalmacen","PeriodoalmacenfindAllByAlmacen");
  
          return this.http.post(url, objser ,{headers:this.configService.getHeaderHttpClientFormPost()})
          
              ;           
  
    }

  procesoCierreperiodo(model){
    let jsonModel = JSON.stringify(model);
    let url = this.configService.getUrlSecurityRes("cierremensual", "procesoCierremensual");
    return this.http.post(url, jsonModel, {headers:this.configService.getHeaderHttpClientFormPost()})
      ;
  }



	getPaginationPorAlmacen(pagenumber,rows,idalmacen){
    
        let obj = {'pagenumber':pagenumber,'rows':rows,'idalmacen':idalmacen};
        let objser = this.configService.serialize(obj);
    
    
          let url = this.configService.getUrlSecurityRes("periodoalmacen","paginationByAlmacen");
           return this.http.post(url,objser, {headers:this.configService.getHeaderHttpClientFormPost()} )
               ;		             
    
    
      }    
    



}
