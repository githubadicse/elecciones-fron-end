import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { Observable } from 'rxjs';
import { HorarioAlimentacionModel } from './horario-alimentacion-model';

@Injectable()
export class HorarioAlimentacionService {

  constructor
  
  (
    private httpClient:HttpClient, private configService:ConfigService

  ) { }


  getAll():Observable<HorarioAlimentacionModel[]>{
    let url = this.configService.getUrlSecurityRes("horarioalimentacion","getall");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.get<HorarioAlimentacionModel[]>(url,{headers:header});

  }



}
