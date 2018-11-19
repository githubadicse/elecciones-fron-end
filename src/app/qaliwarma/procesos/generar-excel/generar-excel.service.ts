import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../../shared/config.service';
import { Observable } from 'rxjs';

@Injectable()
export class GenerarExcelService {

  constructor(private httpCliente:HttpClient, 
   
    private configService:ConfigService) { }

 

  getItemVolumen(anno: number, numeroEntrega:number):Observable<any> {

    let obj = { anno: anno,numeroEntrega:numeroEntrega };
    let objs = this.configService.serialize(obj);
    let url = this.configService.getUrlSecurityRes("qaliwarma", "volumenPesoXls");

    return this.httpCliente.post(url, objs, { headers: this.configService.getHeaderHttpClientForm(),responseType:'blob', observe:'response' });


  }

}
