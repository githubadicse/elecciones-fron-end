import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepartamentoModel } from 'src/app/model/departamentoModel';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { ProvinciaService } from 'src/app/modulo-negocio/provincia/provincia.service';
import { ProvinciaModel } from 'src/app/model/provinciaModel';
import { DistritoService } from 'src/app/modulo-negocio/distrito/distrito.service';
import { DistritoModel } from 'src/app/model/distritoModel';
import { CentroDeVotacionModel } from 'src/app/model/centro-de-votacion-model';
import { CentroDeVotacionService } from 'src/app/modulo-negocio/centro-de-votacion/centro-de-votacion.service';
import { MesaDeVotacionModel } from 'src/app/model/mesa-de-votacion-model';
import { MesaDeVotacionService } from 'src/app/modulo-negocio/mesa-de-votacion/mesa-de-votacion.service';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.scss'],
  providers : [CrudHttpClientServiceShared, ProvinciaService, DistritoService, CentroDeVotacionService, MesaDeVotacionService]
})
export class UbigeoComponent implements OnInit {

  @Input()
  nivel: number;

  @Output('getUbigeo')
  getUbigeo: EventEmitter<any> = new EventEmitter();

  @Output('getMesas')
  getMesas: EventEmitter<MesaDeVotacionModel[]> = new EventEmitter();



  UbigeoRpt: any = {};

  constructor(private crudHttpClientServiceShared: CrudHttpClientServiceShared,
    private provinciaService: ProvinciaService,
    private distritoService: DistritoService,
    private centroDeVotacionService: CentroDeVotacionService,
    private mesaDeVotacionService: MesaDeVotacionService
    ) { }

  departamentosModel: DepartamentoModel[] ;
  provinciasModel: ProvinciaModel[];
  distritosModel: DistritoModel[];
  centroDeVotacionsModel: CentroDeVotacionModel[];
  mesaDeVotacionsModel: MesaDeVotacionModel[];



  ngOnInit() {
    this.getDepartamento();
  }

  getDepartamento() {

    this.crudHttpClientServiceShared.getall('departamento', 'getall', true)
    .subscribe(
      res => {
        this.departamentosModel = res;
      }
    );

  }

  _SelectionChangeDepartamento(e) {
    const idDepartamento = e.value.iddepartamento;
    this.getProvinciaByIdDepartamento(idDepartamento);

    this.emitRpt('idDepartamento', idDepartamento);
  }

  getProvinciaByIdDepartamento(idDepartamento: string) {
    this.provinciaService.getProvinciaByIdDepartamento(idDepartamento)
    .subscribe(
      res => {
        this.provinciasModel = res;
      }
    );
  }


  _SelectionChangeProvincia(e) {
    const idProvincia = e.value.idprovincia;
    this.getDistritoByIdProvincia(idProvincia);

    this.emitRpt('idProvincia', idProvincia);
  }

  getDistritoByIdProvincia(idProvincia: string) {
    this.distritoService.getDistritosByIdProvincia(idProvincia)
    .subscribe(
      res => {
        this.distritosModel = res;
      }
    );

  }


  _SelectionChangeDistrito(e) {
    const idDistrito = e.value.iddistrito;
    this.getCentroDeVotacionByDistrito (idDistrito);

    this.emitRpt('idDistrito', idDistrito);
  }

  getCentroDeVotacionByDistrito(idDistrito: string) {
    this.centroDeVotacionService.getDistritosByIdDistrito(idDistrito)
      .subscribe(
        res => {
          this.centroDeVotacionsModel = res;
        }
      );

  }

  _SelectionChangeCentroDeVotacion(e) {
    const idCentroDeVotacion = e.value.idCentroDeVotacion;
    this.getMesaDeVotacionByIdCentroDeVotacion(idCentroDeVotacion);

    this.emitRpt('idCentroDeVotacion', idCentroDeVotacion);
  }

  getMesaDeVotacionByIdCentroDeVotacion(idCentroDeVotacion: string) {
    this.mesaDeVotacionService.getDistritosByIdProvincia(idCentroDeVotacion)
      .subscribe(
        res => {
          this.mesaDeVotacionsModel = res;
          console.log(this.mesaDeVotacionsModel);
          this.getMesas.emit(this.mesaDeVotacionsModel);
        }
      );

  }

  btnClick() {
    this.getDepartamento();
  }

  private emitRpt (key: string, value: any ): void {
    this.UbigeoRpt[key] = value;

    console.log(this.UbigeoRpt);
    this.getUbigeo.emit(this.UbigeoRpt);
  }

}
