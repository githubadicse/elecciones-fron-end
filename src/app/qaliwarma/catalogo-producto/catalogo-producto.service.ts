import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ConfigService } from '../../shared/config.service';
import { Observable } from 'rxjs';
import { CatalogoProductoModel } from './catalogo-producto-model';
import { CatalogoBonificacionModel } from '../catalogo-bonificacion/catalogo-bonificacion-model';



@Injectable()
export class CatalogoProductoService {

  constructor(private httpClient:HttpClient, private configService:ConfigService)
   { 
     
   }

   getAll():Observable<CatalogoProductoModel[]>{
     let url = this.configService.getUrlSecurityRes("catalogoproductoqaliwarma","getall");

     let header = this.configService.getHeaderHttpClientGet();

     return this.httpClient.get<CatalogoProductoModel[]>(url,{headers:header});
   }

 


}
