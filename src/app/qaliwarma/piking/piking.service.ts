import { Injectable } from '@angular/core';
import { PikingModel } from './piking-model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PikingService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }


  updatePikingList(model,idProductoPorNumeroEntrega,idCatalogoLote):Observable<PikingModel[]>{

    let url = this.configService.getUrlSecurityRes("piking","updatePikingLista");

    return this.httpClient.put <PikingModel[]> (url,model,{params :{"idCatalogoLote":idCatalogoLote,"idProductoPorNumeroEntrega":idProductoPorNumeroEntrega}});
  }



}
