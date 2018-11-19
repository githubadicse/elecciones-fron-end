import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class CargarInfoService {

  constructor(private httpCliente:HttpClient, 
   
    private configService:ConfigService) { }


  cargarInfo(anno:number, numeroEntrega:number){
    let url = this.configService.getUrlSecurityRes("qaliwarma","run");
    let headers = this.configService.getHeaderHttpClientGet();
    let parametros = new HttpParams()
    .set("anno",anno.toString())
    .set("numeroEntrega",numeroEntrega.toString())
    .set("taskIdentity","task-run")
    ;

    return this.httpCliente.get(url,{ params:parametros, headers:headers });
  }

}
