import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CatalogoMarcaModel } from './catalogo-marca-model';
import { Observable } from 'rxjs';


@Injectable()
export class CatalogoMarcaService {

  constructor(private configService:ConfigService,  private httpClient:HttpClient) { }


  getCatalogoMarcaByIdProductoPorNumeroEntrega(idProductoPorNumeroEntrega:string,anno:number,numeroEntrega:number):Observable<CatalogoMarcaModel[]>{

    let url = this.configService.getUrlSecurityRes("catalogoMarca","getCatalogoMarcaByIdProductoPorNumeroEntrega");
    let header = this.configService.getHeaderHttpClientForm();
    let params = new HttpParams().set("idProductoPorNumeroEntrega",idProductoPorNumeroEntrega).set("anno",anno.toString()).set("numeroEntrega",numeroEntrega.toString());


    return this.httpClient.get<CatalogoMarcaModel[]>(url,{params:params,headers:header});


  }

  save(e:CatalogoMarcaModel):Observable<CatalogoMarcaModel>{
    let url = this.configService.getUrlSecurityRes("catalogoMarca","save");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.post<CatalogoMarcaModel>(url,e,{headers:header});
  }

}
