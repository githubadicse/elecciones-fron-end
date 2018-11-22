import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/shared/config.service';
import { ProvinciaModel } from 'src/app/model/provinciaModel';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private configService: ConfigService, private httpClient: HttpClient) { }


  public getProvinciaByIdDepartamento(idDepartamento: string): Observable<ProvinciaModel[]> {

    let obj = { 'idDepartamento': idDepartamento };
    let objser = this.configService.serialize(obj);

    let params = new HttpParams().set("idDepartamento", idDepartamento)

    let url = this.configService.getUrlBasic("provincia", "getProvinciaByIdDepartamento");

    return this.httpClient.get<ProvinciaModel[]>(url, { params });

  }
}
