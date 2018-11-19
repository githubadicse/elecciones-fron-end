import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../shared/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ControlDespachoService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  generarReporte(anno:number, numeroEntrega:number):Observable<any>{

    let obj = { anno: anno,numeroEntrega:numeroEntrega };
    let objs = this.configService.serialize(obj);
    let url = this.configService.getUrlSecurityRes("qaliwarma", "controlDeDespacho");

    return this.httpClient.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });

  }

}
