import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/config.service';
import { Observable } from 'rxjs';
import { DistritoModel } from 'src/app/model/distritoModel';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor( private httpClient:HttpClient, private configService:ConfigService ) { }

  getDistritosByIdProvincia(idProvincia:string):Observable<DistritoModel[]>{

    let params = new HttpParams().set("idProvincia", idProvincia)

    let url = this.configService.getUrlBasic("distrito", "getDistritoByIdProvincia");

    return this.httpClient.get<DistritoModel[]>(url, { params });    
  }
  
}
