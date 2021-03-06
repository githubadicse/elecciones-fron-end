
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilDetalleModel } from './perfil-detalle-model';
import { ConfigService } from '../../shared/config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PerfilModel } from './perfil-model';


@Injectable()
export class PerfilService {

  constructor(private configService:ConfigService, private httpCliente:HttpClient, private http: HttpClient) { }


  getPerfilDetalleByIdLogin(login:string):Observable<PerfilDetalleModel[]>{
    
    let url = this.configService.getUrlSecurityRes("perfildetalle","getPerfilDetalleByLogin");
    let httpParams = new HttpParams().set("login",login.toString());

    
    return this.httpCliente.get<PerfilDetalleModel[]>(url,{params:httpParams});

  }
  getPerfil():Observable<PerfilModel[]>{
    let url = this.configService.getUrlSecurityRes("perfil","getall");

    return this.httpCliente.get<PerfilModel[]>(url);
    
  }
}