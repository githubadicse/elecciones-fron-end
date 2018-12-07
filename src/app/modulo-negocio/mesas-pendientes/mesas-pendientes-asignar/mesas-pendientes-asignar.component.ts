import { Component, OnInit, ViewChild} from '@angular/core';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { MesaDeVotacionModel } from 'src/app/model/mesa-de-votacion-model';
import { PersoneroModel } from '../../../model/personero-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mesas-pendientes-asignar',
  templateUrl: './mesas-pendientes-asignar.component.html',
  styleUrls: ['./mesas-pendientes-asignar.component.scss']
})
export class MesasPendientesAsignarComponent implements OnInit {

  cargandoLista = false;
  verFiltro = false;
  filtroAplicado = false;
  nombreFiltros = 'TODOS';

  totalMesasAsignadas = 0;
  totalMesasVotacion = 0;
  totalMesasPorAsignar = 0;

  listMesasDeVotacion: MesaDeVotacionModel[] = [];
  listMesasDeVotacionPorAsinar: MesaDeVotacionModel[] = [];
  listMesasDeVotacionPorAsinarMostrar: MesaDeVotacionModel[] = [];
  listMesasPorPersonero: any;

  listA: any[] = [];

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['#', 'provincia', 'distrito', 'centro', 'mesa'];
  displayedColumnsPersoneros: string[] = ['#', 'nombrepersonero', 'count'];


  pieChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['A', 'B'],
      ['Mesas Asignadas', this.totalMesasAsignadas],
      ['Mesas Por Asignar', this.totalMesasPorAsignar]
    ],
    options: { legend: 'none'},
  };

  constructor(private crudService: CrudHttpClientServiceShared) { }

  ngOnInit() {
    this.loadAllMesas();
  }


  private loadAllMesas(): void {
    this.filtroAplicado = false;
    this.cargandoLista = true;
    this.crudService.getall('mesaDeVotacion', 'getall', true).subscribe( res => {
      this.listMesasDeVotacion = res;
      this.loadMesasPorAsingar();
    });
  }

  private loadMesasPorAsingar(): void {
    // filtra mesas que no tengan personero asingado
    this.listMesasDeVotacionPorAsinar = this.listMesasDeVotacion;

    this.filtraNullPersonero();

    console.log(this.listMesasDeVotacionPorAsinar);

    this.nombreFiltros = 'TODOS';
    this.cargandoLista = false;
  }

  getUbigeoMesa(mesas: MesaDeVotacionModel[]): void {
    this.cargandoLista = true;
    this.listMesasDeVotacion = mesas;
    this.loadMesasPorAsingar();
    this.verFiltro = false;
    this.filtroAplicado = true;
  }

  // filtrar por provincia, distrito, mientras va seleccionadno
  getUbigeoSelect(rpt: any): void {
    if (rpt.idCentroDeVotacion === undefined) {return; }
    this.nombreFiltros = '';

    if (rpt.idCentroDeVotacion !== null) { this.getFilterData('centroDeVotacion.idCentroDeVotacion', rpt.idCentroDeVotacion);  return; }
    if (rpt.idDistrito !== null) { this.getFilterData('centroDeVotacion.distrito.iddistrito', rpt.idDistrito);  return; }
    if (rpt.idProvincia !== null) { this.getFilterData('centroDeVotacion.distrito.provincia.idprovincia', rpt.idProvincia); }
  }

  // nombreFiltro = obtiene el nombre del filtro provincia: moyobamaba distrito: moyo .....
  private getFilterData(campoFiltrar: string, valorFiltrar: any): void {
    const arrCampos = campoFiltrar.split('.');
    this.listMesasDeVotacionPorAsinar = this.listMesasDeVotacion
      .filter(x => {
        let colFiltar = x;
        arrCampos.forEach(key => { colFiltar = colFiltar[key]; });

        if (colFiltar === valorFiltrar) { return x; }
      })
      .map(x => x);

    this.filtraNullPersonero();
    this.filtroAplicado = true;
  }

  // para la lista filtra solo los que no tienen personero para mostrar en la lista
  private filtraNullPersonero() {
    this.listMesasDeVotacionPorAsinarMostrar = this.listMesasDeVotacionPorAsinar
      .filter(x => !x.personero)
      .map(x => x);

    // actualiza estadistica
    this.loadListaMesasPorPersonero();
  }

  quitarFiltro(): void {
    this.listMesasDeVotacionPorAsinar = [];
    this.listMesasDeVotacionPorAsinarMostrar = [];
    this.loadAllMesas();
  }

  // estadisiticas

  loadListaMesasPorPersonero() {
    const objListPersonero = this.listMesasDeVotacionPorAsinar
        .filter( x => x.personero)
        .map(x => x.personero)
        .reduce((m, d) => {
          if (!m[d.idpersonero]) {
            m[d.idpersonero] = { ...d, count: 1 };
            return m;
          }

          m[d.idpersonero].count += 1;
          return m;
        }, []);

    this.listMesasPorPersonero = Object.keys(objListPersonero).map(key => objListPersonero[key]);
    this.listMesasPorPersonero = new MatTableDataSource(<MesaDeVotacionModel[]>this.listMesasPorPersonero);
    this.listMesasPorPersonero.sort = this.sort;

    this.getTotalResumenMesasAsignadas();
    this.getTotalMesasVotacion();
    // this.getTotalMesasPorAsignar();
    console.log(this.listMesasPorPersonero);
  }

  getTotalMesasPorPersonero(item: any) {
    return this.listMesasPorPersonero.data.filter(x => x.idpersonero === item.idpersonero).map( x => x.count);
  }

  getTotalResumenMesasAsignadas() {
    this.totalMesasAsignadas = 0;
    if (this.listMesasPorPersonero === undefined) { return 0; }
    this.totalMesasAsignadas = this.listMesasPorPersonero.data.map(t => t.count).reduce((acc, value) => acc + value, 0);

    // return this.totalMesasAsignadas;
  }

  getTotalMesasVotacion() {
    this.totalMesasVotacion  = 0;
    if (this.listMesasDeVotacion === undefined) { return 0; }
    this.totalMesasVotacion = this.listMesasDeVotacion.length;

    this.getTotalMesasPorAsignar();
    // return this.totalMesasVotacion;
  }

  getTotalMesasPorAsignar() {
    this.totalMesasPorAsignar = this.totalMesasVotacion - this.totalMesasAsignadas;
    this.renderGrafico();
    // return this.totalMesasPorAsignar;
  }

  private renderGrafico(): void {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['A', 'B'],
        ['Mesas Asignadas', this.totalMesasAsignadas],
        ['Mesas Por Asignar', this.totalMesasPorAsignar]
      ],
      options: { legend: 'none' },
    };
  }
}
