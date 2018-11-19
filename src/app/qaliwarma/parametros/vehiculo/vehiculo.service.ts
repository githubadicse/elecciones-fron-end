import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { VehiculoModel } from './vehiculo-model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class VehiculoService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  getAll():Observable<VehiculoModel[]>{
    let url = this.configService.getUrlSecurityRes("vehiculo","getall");

    return this.httpClient.get<VehiculoModel[]>(url);
  }

}
