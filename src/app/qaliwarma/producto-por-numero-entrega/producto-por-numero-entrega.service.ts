import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ConfigService } from '../../shared/config.service';
import { Observable } from 'rxjs';
import { ProductoPorNumeroEntregaModel } from './producto-por-numero-entrega-model';

@Injectable()
export class ProductoPorNumeroEntregaService {

  constructor(private httpClient:HttpClient,  private configService:ConfigService) { }


  getByIdCatalogoProducto(anno:number,numeroEntrega:number,idCatalogoProducto:string):Observable<ProductoPorNumeroEntregaModel[]>{

    let params = new HttpParams()
    .set("anno", anno.toString()) 
    .set("numeroEntrega", numeroEntrega.toString())
    .set("idCatalogoProducto", idCatalogoProducto)
    ;

    let url = this.configService.getUrlSecurityRes("productoPorNumeroEntrega","getProductoPorNumeroEntregaAndIdproducto");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.get<ProductoPorNumeroEntregaModel[]>(url,{params,headers:header});
  }

  save(e):Observable<ProductoPorNumeroEntregaModel>{
    let url = this.configService.getUrlSecurityRes("productoPorNumeroEntrega","save");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.post<ProductoPorNumeroEntregaModel>(url,e,{headers:header});
  }


  getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem(anno:number,numeroEntrega:number,item:string):Observable<ProductoPorNumeroEntregaModel[]>{
    let params = new HttpParams()
    .set("anno", anno.toString()) 
    .set("numeroEntrega", numeroEntrega.toString())
    .set("item", item)
    ;

    let url = this.configService.getUrlSecurityRes("productoPorNumeroEntrega","getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.get<ProductoPorNumeroEntregaModel[]>(url,{params,headers:header});

  }

}
