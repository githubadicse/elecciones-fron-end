import { Injectable } from '@angular/core';

import { ConfigService } from '../../shared/config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogoItemAnnoService {

  constructor(private httpClient: HttpClient,
     private configService: ConfigService
  ) { }


  getItemPorCategoriaDetallado(anno: number):Observable<any> {

    let obj = { anno: anno };

    let objs = this.configService.serialize(obj);


    let url = this.configService.getUrlSecurityRes("itemEntrega", "xls");

    return this.httpClient.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });


  }

  getPdfComprobante(datos) {
    let url = this.configService.getUrlBasic ("demo","comprobante");
    url = url;
    let params = new HttpParams()
        .set("datos", JSON.stringify(datos)) 
        
     return this.httpClient.get (url,{params,responseType:'blob', observe: 'response'});
     
    
   
  }


  getItemVolumen(anno: number, numeroEntrega:number):Observable<any> {

    let obj = { anno: anno,numeroEntrega:numeroEntrega };

    let objs = this.configService.serialize(obj);


    let url = this.configService.getUrlSecurityRes("qaliwarma", "volumenItem");

    return this.httpClient.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });


  }

}
