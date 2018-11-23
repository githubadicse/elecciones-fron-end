import { Component, OnInit } from '@angular/core';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { Voto001Model } from '../../../model/voto001.model';
import { Plantilla001Model } from '../../../model/plantilla001.model';
import { Voto002Model } from '../../../model/voto002.model';
import { Plantilla002Model } from '../../../model/plantilla002.model';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import swal from 'sweetalert2';
import { MSJ_LOADING, MSJ_SUCCESS } from '../../../shared/config.service.const';

@Component({
  selector: 'app-registro-voto-main',
  templateUrl: './registro-voto-main.component.html',
  styleUrls: ['./registro-voto-main.component.scss'],
  providers: [CrudHttpClientServiceShared, UtilitariosAdicse]
})
export class RegistroVotoMainComponent implements OnInit {

  voto001: Voto001Model;
  voto002: Voto002Model[] = [];
  plantilla001: Plantilla001Model;
  Plantilla001Nueva: Plantilla001Model;
  ubigeoMesa: any;
  numMesa: number;
  numMesaValida = false;
  totalVotos = 0;

  constructor(
    private crudHttpClientServiceShared: CrudHttpClientServiceShared,
    private utilitariosAdicse: UtilitariosAdicse
    ) { }

  ngOnInit() {
    this.loadPlantilla();
  }

  loadPlantilla() {
    this.crudHttpClientServiceShared.edit('1', 'plantilla001', 'edit', true).
      subscribe((res: any) => {
        console.log(res);

        this.plantilla001 = <Plantilla001Model>res;
        // this.plantilla001.plantilla002s.map(x => x['voto'] = '');
        this.Plantilla001Nueva = <Plantilla001Model>res;
      });
  }

  setVotos(item: any, cantidad: string): void {
    let _voto: Voto002Model = null;

    // busca si ya existe en lista
    this.voto001.voto002s.filter(x => x.plantilla002.idplantilla002 === item.idplantilla002).map(x => _voto = x);

    if (_voto) {
      _voto.voto = parseFloat(cantidad);
      // this.voto001.voto002s[1].voto = cantidad;
    } else {
      _voto = new Voto002Model();
      _voto.idvoto002 = this.utilitariosAdicse.randomString();
      _voto.plantilla002 = item;
      _voto.voto = parseFloat(cantidad);

      this.voto001.voto002s.push(_voto);
    }

    this.totalVotos = this.getTotalVotos() || 0;

    console.log('plantilla001 ', this.plantilla001);
    console.log('voto001 ', this.voto001);
  }

  getVotos(item: Plantilla002Model): any {
    if ( this.voto001 === undefined ) {return ''; }
    return this.voto001.voto002s.filter(x => x.plantilla002.idplantilla002 === item.idplantilla002).map(x => x.voto) || '';
  }

  getTotalVotos(): number {
    return this.voto001.voto002s.map(t => t.voto).reduce((acc, value) => (acc || 0) + (value || 0), 0);
  }

  validaUbigeoMesa( ubiegeomesa: any): void {
    this.ubigeoMesa = ubiegeomesa;
    this.numMesa = ubiegeomesa.idMesaDeVotacion === undefined ? null : ubiegeomesa.idMesaDeVotacion;
    this.numMesaValida = this.numMesa === null ? false : true;
    this.loadVotos();
  }

  loadVotos(): void {
    if (!this.numMesaValida) { return; }
    this.crudHttpClientServiceShared.edit(this.numMesa, 'voto001', 'filterByNumMesa', true)
      .subscribe(res => {

        if (res === null ) {
          this.voto001 = new Voto001Model();
          this.voto001.mesaDeVotacion = this.ubigeoMesa.MesaDeVotacion;

          this.plantilla001 = null;
          setTimeout(() => {
            // this.Plantilla001Nueva.plantilla002s.map(x => x['voto'] = '');
            this.plantilla001 = this.Plantilla001Nueva;
            this.totalVotos = 0;
            this.voto001.plantilla001 = this.plantilla001;
          }, 50);

        } else {
          this.voto001 = <Voto001Model>res;
          this.totalVotos = this.getTotalVotos() || 0;
        }


        console.log(this.voto001);
      });
  }

  grabarActa(): void {

    const evento = this.voto001.idvoto001 === null ? 'create' : 'update';
    const data = this.voto001;
    console.log(data);

    swal(MSJ_LOADING);
    this.crudHttpClientServiceShared.create(data, 'voto001', evento, true)
    . subscribe (res => {
      console.log(res);
      swal(MSJ_SUCCESS);
      });

  }

}
