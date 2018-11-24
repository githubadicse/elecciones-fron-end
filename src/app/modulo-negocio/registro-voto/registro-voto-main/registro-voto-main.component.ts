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
  loadingPlantilla = false;
  loadingMesa = false;

  constructor(
    private crudHttpClientServiceShared: CrudHttpClientServiceShared,
    private utilitariosAdicse: UtilitariosAdicse
    ) { }

  ngOnInit() {
    this.loadPlantilla();
  }

  loadPlantilla() {
    this.loadingPlantilla = true;
    this.crudHttpClientServiceShared.edit('1', 'plantilla001', 'edit', true).
      subscribe((res: any) => {
        this.loadingPlantilla = false;
        this.plantilla001 = <Plantilla001Model>res;
        this.Plantilla001Nueva = <Plantilla001Model>res; // se mantiene en blanco, para no llamar nuevamente esta funcion
      });
  }

  setVotos(item: any, cantidad: string): void {
    let _voto: Voto002Model = null;

    // busca si ya existe en lista
    this.voto001.voto002s.filter(x => x.plantilla002.idplantilla002 === item.idplantilla002).map(x => _voto = x);

    if (_voto) { // si el voto ya esta registrado, actualiza
      _voto.voto = parseFloat(cantidad);
    } else { // crea un nuevo voto Voto002
      _voto = new Voto002Model();
      _voto.idvoto002 = this.utilitariosAdicse.randomString();
      _voto.plantilla002 = item;
      _voto.voto = parseFloat(cantidad);

      this.voto001.voto002s.push(_voto);
    }

    this.totalVotos = this.getTotalVotos() || 0;
  }

  // obtiene el numero de votos por candidato para mostrar en la plantilla
  getVotos(item: Plantilla002Model): any {
    if ( this.voto001 === undefined ) {return ''; }
    return this.voto001.voto002s.filter(x => x.plantilla002.idplantilla002 === item.idplantilla002).map(x => x.voto) || '';
  }

  // total de votos
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
    this.loadingMesa = true;

    this.crudHttpClientServiceShared.edit(this.numMesa, 'voto001', 'filterByNumMesa', true)
      .subscribe(res => {

        if (res === null ) {
          this.voto001 = new Voto001Model();
          this.voto001.mesaDeVotacion = this.ubigeoMesa.MesaDeVotacion;

          // this.plantilla001 = null;
          this.loadingPlantilla = true;
          setTimeout(() => { // time para hacer el efecto nuevo y asignar plantilla en blanco
            this.plantilla001 = this.Plantilla001Nueva;
            this.totalVotos = 0;
            this.voto001.plantilla001 = this.plantilla001;
            this.loadingPlantilla = false;
          }, 50);

        } else {
          this.voto001 = <Voto001Model>res;
          this.totalVotos = this.getTotalVotos() || 0;
        }

        this.loadingMesa = false;


      });
  }

  grabarActa(): void {
    const data = JSON.stringify(this.voto001);

    if (this.voto001.idvoto001 !== 0 ) { this.updateActa(data); return; }

    swal(MSJ_LOADING);
    this.crudHttpClientServiceShared.create(data, 'voto001', 'create', true)
    . subscribe (res => {
      console.log(res);
      this.voto001 = res;
      swal(MSJ_SUCCESS);
      });

  }

  updateActa(data: any): void {

    swal(MSJ_LOADING);
    this.crudHttpClientServiceShared.update(data, 'voto001', 'update', true)
      .subscribe(res => {
        console.log(res);
        swal(MSJ_SUCCESS);
      });

  }
}

