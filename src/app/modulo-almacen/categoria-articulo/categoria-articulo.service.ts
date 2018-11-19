import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { SharedService } from '../../shared/servicio/shared.service';
import { ConfigService } from '../../shared/config.service';

@Injectable()
export class CategoriaArticuloService {

  constructor(private http:Http,
    private serviceShared:SharedService, private configService:ConfigService) { }

  getCategoriaForDsc(query:String){
    let dsccategoria = query;
    let obj = {dsccategoria:query};

    let objs = this.configService.serialize(obj);

    let url = this.configService.getUrlSecurityRes ("categoria","findByDsccategoriaContainingIgnoreCaseOrderByDsccategoriaAsc");
    //return this.http.post(url,objs,this.configService.getHeadersForm())
    return null     ;

         

  }

}
