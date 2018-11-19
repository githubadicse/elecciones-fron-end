import { Injectable } from '@angular/core';


import { debug } from 'util';


import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';

@Injectable()
export class VentasService {



  constructor(private http: HttpClient, private configService: ConfigService) {

  }

  getMac() {
    let url = "http://localhost:8082/tools/mac";



    return this.http.get(url);
  }

  getValidar(username, password, macs) {
    let obj = { 'username': username, 'password': password, 'macs': macs };
    let objser = this.configService.serialize(obj);

    let url = this.configService.getUrlSecurityRes("usuario", "loginpuntoventa");

    return this.http.post(url, objser, {headers:this.configService.getHeaderHttpClientForm() })
     
      ;

  }

}
