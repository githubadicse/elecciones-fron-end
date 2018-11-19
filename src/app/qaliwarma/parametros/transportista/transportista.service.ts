import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TransportistaModel } from './transportista-model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class TransportistaService {

  constructor( private configService:ConfigService, private httpClient:HttpClient) { }

  getall():Observable<TransportistaModel[]>{
    let url = this.configService.getUrlSecurityRes("transportista","getall");
    return this.httpClient.get<TransportistaModel[]>(url);
  }

}
