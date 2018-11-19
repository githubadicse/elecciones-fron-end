import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { Observable } from 'rxjs';
import { CatalogoLoteModel } from './catalogo-lote-model';
import { PikingModel } from '../piking/piking-model';

@Injectable()
export class CatalogoLoteService {

  constructor(private httpClient:HttpClient, private configService:ConfigService) { }


  getCatalogoLoteByIdCatalogoMarca(idCatalogoMarca:string):Observable<CatalogoLoteModel[]>{
    let url = this.configService.getUrlSecurityRes("catalogolote","getCatalogoloteByIdCtalogoMarca");
    let parametro = new HttpParams().set("idCatalogoMarca",idCatalogoMarca);
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.get<CatalogoLoteModel[]>(url,{params:parametro,headers:header});
  }

  getPikingByIdCatalogoLote(idCatalogoLote:string):Observable<PikingModel[]>{
    let url = this.configService.getUrlSecurityRes("piking","getPikingByIdCatalogoLote");
    let parametro = new HttpParams().set("idCatalogoLote",idCatalogoLote);
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.get<PikingModel[]>(url,{params:parametro,headers:header});
  }

  save(e:CatalogoLoteModel):Observable<CatalogoLoteModel>{
    let url = this.configService.getUrlSecurityRes("catalogolote","create");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.post<CatalogoLoteModel>(url,e,{headers:header});
  }

}
