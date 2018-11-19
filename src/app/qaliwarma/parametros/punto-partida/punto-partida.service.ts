import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PuntoPartidaModel } from './punto-partida-model';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class PuntoPartidaService {



  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  edit(id:number):Observable<PuntoPartidaModel>{

    let url = this.configService.getUrlSecurityRes("puntoPartida","edit");
    let header = this.configService.getHeaderHttpClientGet();
    let parametros = new HttpParams().set("id",id.toString());

    return this.httpClient.get<PuntoPartidaModel>(url,{params:parametros,headers:header});
  
  }

  create(model:any):Observable<any>{
    let url = this.configService.getUrlSecurityRes("puntoPartida","create");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.post<any>(url,model,{headers:header});

  }
  update(model:PuntoPartidaModel):Observable<PuntoPartidaModel>{
      
    let url = this.configService.getUrlSecurityRes("puntoPartida","update");
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.put<PuntoPartidaModel>(url,model,{headers:header});
  }

  delete(id:number):Observable<PuntoPartidaModel>{
    let url = `${this.configService.getUrlSecurityRes("puntoPartida","delete")}/${id}`;
    let header = this.configService.getHeaderHttpClientGet();
      
    return this.httpClient.delete<PuntoPartidaModel>(url,{headers:header });

  }

  getall():Observable<PuntoPartidaModel[]>{
    let url = this.configService.getUrlSecurityRes("puntoPartida","getall");
    return this.httpClient.get<PuntoPartidaModel[]>(url);
  }

}
