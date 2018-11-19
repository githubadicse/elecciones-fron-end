import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/config.service';
import { HttpClient } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class RutaDistribucionService {

  constructor(private configService:ConfigService, private httpCliente:HttpClient) { }

  getBuildResumenExcel(id:string):Observable<any> {

    let obj = { id: id };
    let objs = this.configService.serialize(obj);
    let url = this.configService.getUrlSecurityRes("rutaDistribucion", "BuildRutaDistribucion");

    return this.httpCliente.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });


  }

  verMapa(id:string):Observable<any> {

    let obj = { id: id };
    let objs = this.configService.serialize(obj);
    let url = this.configService.getUrlSecurityRes("rutaDistribucion", "getpoints");

    return this.httpCliente.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(), responseType:'text' });


  }

  

  actualizaPesoTotal(anno,numeroEntrega):Observable<any>{

    let url = this.configService.getUrlSecurityRes("requerimientoVolumen001","actualizaPesoTotalDesdeGuiaRemision");
    let obj = this.configService.serialize( {"anno":anno,"numeroEntrega":numeroEntrega});
    let header = this.configService.getHeaderHttpClientFormPost();
    return this.httpCliente.post(url,obj,{headers:header} )
  }

}
