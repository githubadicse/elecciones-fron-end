import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../shared/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenerarGuiasService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }


  crearGuiaRemision(anno:number,numeroEntrega:number,serie:number,numeroGuiaInicio:number){

    let url = this.configService.getUrlSecurityRes("qaliwarma","crearGuiaRemision");
    let parametros = this.configService.serialize( {anno:anno,numeroEntrega:numeroEntrega, idproveedorcliente:1, serie:serie,numeroGuiaInicio:numeroGuiaInicio});
    let header = this.configService.getHeaderHttpClientForm();

    return this.httpClient.post(url,parametros,{headers:header});
    
  }

}
