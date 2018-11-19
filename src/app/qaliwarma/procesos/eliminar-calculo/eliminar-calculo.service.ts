import { Injectable } from '@angular/core';
import { ConfigService } from '../../../shared/config.service';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EliminarCalculoService {

  constructor(private configService:ConfigService,  private httpClient:HttpClient){}

  eliminarCalculo(anno:number, numeroEntrega:number):Observable<any>{

    let url = this.configService.getUrlSecurityRes("qaliwarma","deleteVolumenConvertidoByAnnoAndNumeroEntrega");
    let parametros  = this.configService.serialize( {anno:anno,numeroEntrega:numeroEntrega});
    let header = this.configService.getHeaderHttpClientFormPost();
    return this.httpClient.post(url,parametros,{headers:header});

  }

}
