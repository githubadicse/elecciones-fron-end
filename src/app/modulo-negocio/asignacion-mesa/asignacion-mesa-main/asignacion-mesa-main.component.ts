import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MesaDeVotacionModel } from 'src/app/model/mesa-de-votacion-model';
import { filter } from 'rxjs/operators';
import { PersoneroModel } from 'src/app/model/personero-model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import swal from 'sweetalert2';
import { MSJ_SUCCESS } from 'src/app/shared/config.service.const';
import { RegistroVotoEditComponent } from '../../registro-voto/registro-voto-edit/registro-voto-edit.component';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-asignacion-mesa-main',
  templateUrl: './asignacion-mesa-main.component.html',
  styleUrls: ['./asignacion-mesa-main.component.scss']
})
export class AsignacionMesaMainComponent implements OnInit {

  displayedColumns: string[] = ['select', '#', 'numeroDeMesa', 'personero', 'numeroDeVotantes'];
  displayedColumnsAsignacion: string[] = ['personero', 'mesasAsignadas', 'numeroVotantes'];
  displayedFooterAsignacionPorAsignar: string[] = ['total', 'mesas', 'votantes'];
  listMesas: any;
  checkAll = false;
  personero: any = false;
  resumenAsignacion: any;

  totalVotante = 0;

  private listMesasSeleccionadas: MesaDeVotacionModel[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private crudService: CrudHttpClientServiceShared) { }

  ngOnInit() {
  }

  asignarMesas(): void {
    this.listMesasSeleccionadas.map((x: any) => { x.personero = this.personero; delete x.checked; });

    const data = JSON.stringify(this.listMesasSeleccionadas);
    this.crudService.update(data, 'mesaDeVotacion', 'updates', true).subscribe(res => {
      console.log(res);
      swal(MSJ_SUCCESS);
      this.resumenAsignacion = this.groupByPersonero();
    });
  }

  getUbigeoMesa( mesas: any ) {
    this.listMesas = new MatTableDataSource(<MesaDeVotacionModel[]>mesas);
    this.listMesas.sort = this.sort;

    this.resumenAsignacion = this.groupByPersonero();
    console.log('agrupado', this.resumenAsignacion);
    console.log(this.listMesas);
  }

  setPersonero(event): void {
    this.personero = event;
    console.log('this.personero', this.personero);
  }

  selectCheck(row: any): void {
    const checked = row.checked || false;
    row.checked = !checked;

    this.getMesasSelecccionadas();
  }

  selectCheckAll(): void {
    this.checkAll = !this.checkAll;
    this.listMesas.data.map(x => x.checked = this.checkAll);
    this.getMesasSelecccionadas();
  }

  private getMesasSelecccionadas(): void {
    this.listMesasSeleccionadas = this.listMesas.data.filter(x => x.checked === true).map(x => x);
  }


  groupByPersonero() {
    // tslint:disable-next-line:prefer-const
    let arr: any = [];
    const aa = this.listMesas.data
    .filter(x => x.personero)
    .map((p: MesaDeVotacionModel) => {
      const id = p.personero.idpersonero;
      if ( !arr[id] ) {
        arr[id] = [];
        arr[id].personero = p.personero;
        arr[id].numeroVotantes = 0;
        arr[id].mesasAsignadas = 0;
      }

      arr[id].mesasAsignadas ++;
      arr[id].numeroVotantes += p.numeroDeVotantes;
    });

    return Object.values(arr);
  }

  getTotalVotantes() {
    if (this.listMesas === undefined) { return 0; }
    return this.listMesas.data.map(t => t.numeroDeVotantes).reduce((acc, value) => acc + value, 0);
  }

  getTotalResumenMesas() {
    if (this.resumenAsignacion === undefined) { return 0; }
    return this.resumenAsignacion.map(t => t.mesasAsignadas).reduce((acc, value) => acc + value, 0);
  }

  getTotalResumenVotantes() {
    if (this.resumenAsignacion === undefined) { return 0; }
    return this.resumenAsignacion.map(t => t.numeroVotantes).reduce((acc, value) => acc + value, 0);
  }

  getResumenDIffMesas() {
    if (this.listMesas === undefined) { return 0; }
    const totalMesas = this.listMesas === undefined ? 0 : this.listMesas.data.length;
    return totalMesas - this.getTotalResumenMesas();
  }

  getResumenDiffVotantes() {
    return this.getTotalVotantes() - this.getTotalResumenVotantes();
  }

  getPorcentajeMesasAsigndas() {
    if (this.listMesas === undefined) { return 0; }
    const totalMesas = this.listMesas === undefined ? 0 : this.listMesas.data.length;
    const resumenTotalMesas = this.getTotalResumenMesas();
    const porcentaje = (resumenTotalMesas / totalMesas) * 100;
    return parseFloat(porcentaje.toString()).toFixed(2);
  }


}
