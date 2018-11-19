import { Injectable } from '@angular/core';

import { ConfigService } from '../../shared/config.service';
import { ProductoPresentacionModel } from './producto-presentacion-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoPresentacionService {

  constructor(private httpClient:HttpClient, private configService:ConfigService ) { }



  getPresentacionByIdAnnoNumeroEntrega(idCatalogo,anno,numeroEntrega):Observable<ProductoPresentacionModel[]>{

    let url = this.configService.getUrlSecurityRes("productoPresentacion","getPresentacionByIdAnnoNumeroEntrega");

    let header = this.configService.getHeaderHttpClientForm();

    let parametros = {'idCatalogoProducto':idCatalogo,'anno':anno,'numeroEntrega':numeroEntrega};

    let parmSerializado = this.configService.serialize(parametros);

    return  this.httpClient.post<ProductoPresentacionModel[]>(url,parmSerializado,{headers:header}) ;

  }



}
