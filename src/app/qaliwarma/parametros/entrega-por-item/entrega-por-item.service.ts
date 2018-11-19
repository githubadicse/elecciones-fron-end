import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntregaPorItemModel } from './entrega-por-item-model';

import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../../shared/config.service';


@Injectable()
export class EntregaPorItemService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }


  getItemByAnnoAndNumeroEntrega(anno:number, numeroEntrega:number):Observable<EntregaPorItemModel[]>{

        let url = this.configService.getUrlSecurityRes("entregaPorItem","getEntregaPorItemByAnnoAndNumeroEntrega");
        
        let header = this.configService.getHeaderHttpClientGet();
        let parametros = new HttpParams().set("anno",anno.toString()).set("numeroEntrega",numeroEntrega.toString());
        
        return this.httpClient.get<EntregaPorItemModel[]>(url,{params:parametros,headers:header});
  }


}
