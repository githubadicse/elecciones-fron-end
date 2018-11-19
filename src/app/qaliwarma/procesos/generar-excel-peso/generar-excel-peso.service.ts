import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../shared/config.service';
import { Observable } from 'rxjs';

@Injectable()
export class GenerarExcelPesoService {

  constructor(private httpCliente:HttpClient, 
   
    private configService:ConfigService) { }

  getItemVolumen(anno: number, numeroEntrega:number):Observable<any> {

    let obj = { anno: anno,numeroEntrega:numeroEntrega };
    let objs = this.configService.serialize(obj);
    let url = this.configService.getUrlSecurityRes("qaliwarma", "matrizPeso");

    return this.httpCliente.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });


  }

}
