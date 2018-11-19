import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChoferModel } from './chofer-model';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class ChoferService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  getAll():Observable<ChoferModel[]>{
    let url = this.configService.getUrlSecurityRes("chofer","getall");

    return this.httpClient.get<ChoferModel[]>(url);
  }

}
