import { Component, OnInit } from '@angular/core';

import { forEach } from '@angular/router/src/utils/collection';
import { VentasService } from '../ventas.service';
import { debug } from 'util';

@Component({
  selector: 'ad-registrar-apertura',
  templateUrl: './registrar-apertura.component.html',
  styleUrls: ['./registrar-apertura.component.css'],
  providers : [VentasService]
})
export class RegistrarAperturaComponent implements OnInit {

  public mac:string;
  public macs:Array<string>;
  public username:string;
  public password:string;
  constructor(private ventasService:VentasService) { }

  ngOnInit() {
    this.getMac();
  }

  getMac(){
    let mac:any;
    this.ventasService.getMac()
      .subscribe (
        res => {
          
          //this.macs = res.data;
          // res.forEach(element => {
          //   this.macs.push(element)
          // });
          debugger;
        }
      )

  }

  validar(){
    this.ventasService.getValidar(this.username, this.password, this.macs)
      .subscribe(
        res => {
          debugger;
        }
      )

  }

}
