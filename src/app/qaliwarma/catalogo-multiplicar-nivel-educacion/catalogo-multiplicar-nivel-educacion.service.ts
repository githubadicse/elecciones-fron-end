import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatalogoMultiplicarNivelEducacionModel } from './catalogo-multiplicar-nivel-educacion-model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoMultiplicarNivelEducacionService {

  constructor(
    private configService:ConfigService, private httpCliente:HttpClient
  ) { }


  getCatalogoMultiplicarByPresentacion(model:any):Observable<CatalogoMultiplicarNivelEducacionModel[]> {
   
    let url = this.configService.getUrlSecurityRes("catalogoMultiplicarNivelEducacion","getCatalogoMultiplicarByPresentacion");
 
    let obj = JSON.stringify(model);
    
    return this.httpCliente.post<CatalogoMultiplicarNivelEducacionModel[]>(url,obj,{headers:this.configService.getHeaderHttpClientFormPostTypeJson()});
  }



}
