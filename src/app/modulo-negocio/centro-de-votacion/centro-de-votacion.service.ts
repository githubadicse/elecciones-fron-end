import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/config.service';
import { CentroDeVotacionModel } from 'src/app/model/centro-de-votacion-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroDeVotacionService {

  constructor( private httpClient:HttpClient, private configService:ConfigService ) { }

  getDistritosByIdDistrito(idDistrito:string):Observable<CentroDeVotacionModel[]>{

    let params = new HttpParams().set("idDistrito", idDistrito)

    let url = this.configService.getUrlBasic("centrodevotacion", "getCentroDeVotacionByDistrito");

    return this.httpClient.get<CentroDeVotacionModel[]>(url, { params });    
  }


}
