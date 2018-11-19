import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class CalcularVolumenService {

  constructor(private httpCliente:HttpClient, 
   
    private configService:ConfigService) { }


  calcularVolumen(anno:number, numeroEntrega:number){
    let url = this.configService.getUrlSecurityRes("qaliwarma","calcular");
    let headers = this.configService.getHeaderHttpClientGet();
    let parametros = new HttpParams()
    .set("anno",anno.toString())
    .set("numeroEntrega",numeroEntrega.toString())
    .set("taskIdentity","task-run")
    ;

    return this.httpCliente.get(url,{ params:parametros, headers:headers });
  }
}

