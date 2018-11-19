import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentoidentificacionModel } from './documentoidentificacion-model';
import { ConfigService } from '../../shared/config.service';

@Injectable()
export class DocumentoidentificacionService {

  constructor(private configService:ConfigService,private httpClient:HttpClient ) { }


  getAll(): Observable<DocumentoidentificacionModel[]> {
    let url = this.configService.getUrlSecurityRes("documentoidentificacion", "getall");

    return this.httpClient.get<DocumentoidentificacionModel[]>(url);

  }

}
