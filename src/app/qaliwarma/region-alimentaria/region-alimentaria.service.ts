import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionAlimentariaModel } from './region-alimentaria-model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';


@Injectable()
export class RegionAlimentariaService {

  constructor(private httpClient:HttpClient, private configService:ConfigService) { }


  getAll():Observable<RegionAlimentariaModel[]>{

    let url = this.configService.getUrlSecurityRes("regionalimentaria","getall");
    
    return this.httpClient.get<RegionAlimentariaModel[]>(url,{headers:this.configService.getHeaderHttpClientGet()})
    
   }
}
