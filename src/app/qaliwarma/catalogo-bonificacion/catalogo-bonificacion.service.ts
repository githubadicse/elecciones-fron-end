import { Injectable } from '@angular/core';
import { CatalogoBonificacionModel } from './catalogo-bonificacion-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';

import { Observable } from 'rxjs';

@Injectable()
export class CatalogoBonificacionService {

  constructor(private httpClient:HttpClient, private configService:ConfigService) { }

  sendConsulta(idproducto,idregion,numeroEntrega,idHorarioAlimentacion):Observable<CatalogoBonificacionModel[]>{
    let url = this.configService.getUrlSecurityRes("catalogobonificacion","getCatalogoByProductoRegionNumeroEntrega");

    let header = this.configService.getHeaderHttpClientGet();

    let params = new HttpParams()
        .set("idproducto", idproducto) 
        .set("idregion", idregion)
        .set("numeroEntrega", numeroEntrega)
        .set("idHorarioAlimentacion", idHorarioAlimentacion);

    return this.httpClient.get<CatalogoBonificacionModel[]>(url,{params,headers:header});

    
   }

  save(catalogobonificacion:CatalogoBonificacionModel):Observable<CatalogoBonificacionModel>{
    let jsonModel = JSON.stringify(catalogobonificacion);
  
    let url = this.configService.getUrlSecurityRes("catalogobonificacion","save");

    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.put<CatalogoBonificacionModel>(url,jsonModel,{headers:header });

  }

}
