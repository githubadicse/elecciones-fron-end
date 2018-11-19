import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ItemEntregaModel } from './item-entrega-model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/config.service';


@Injectable()
export class ItemEntregaService {

  constructor(private hpptClient:HttpClient, private configService:ConfigService) 
  { 

 
  }
  getItems(anno:number):Observable<ItemEntregaModel[]>{

    let url = this.configService.getUrlSecurityRes("itemEntrega", "getall");
    let sanno = anno.toString();
    
    let params = new HttpParams()
        .set("anno", sanno) ;

    return this.hpptClient.get<ItemEntregaModel[]>(url,{params,headers: this.configService.getHeaderHttpClientForm()});
     
  }

 
}
