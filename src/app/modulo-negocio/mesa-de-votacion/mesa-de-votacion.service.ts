import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/config.service';
import { Observable } from 'rxjs/Observable';
import { MesaDeVotacionModel } from 'src/app/model/mesa-de-votacion-model';

@Injectable({
  providedIn: 'root'
})
export class MesaDeVotacionService {

  constructor( private httpClient:HttpClient, private configService:ConfigService ) { }

  getDistritosByIdProvincia(idCentroDeVotacion:string):Observable<MesaDeVotacionModel[]>{

    let params = new HttpParams().set("idCentroDeVotacion", idCentroDeVotacion)

    let url = this.configService.getUrlBasic("mesaDeVotacion", "getMesaDeVotacionByIdCentroDeVotacion");

    return this.httpClient.get<MesaDeVotacionModel[]>(url, { params });    
  }
}
