import { Component, OnInit, OnDestroy } from '@angular/core';
import { Voto001Model } from '../../../model/voto001.model';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';
import { Voto002Model } from '../../../model/voto002.model';
import { MesaDeVotacionModel } from 'src/app/model/mesa-de-votacion-model';

@Component({
  selector: 'app-mesas-pendientes-registrar',
  templateUrl: './mesas-pendientes-registrar.component.html',
  styleUrls: ['./mesas-pendientes-registrar.component.scss']
})
export class MesasPendientesRegistrarComponent implements OnInit, OnDestroy {

  cargandoLista = false;
  verFiltro = false;
  filtroAplicado = false;


  listMesasVotacion: MesaDeVotacionModel[] = [];
  listVotos: Voto001Model[] = [];
  listVotosMesasPorRegistar: any[] = [];
  listVotosMesasPorRegistarMostar: any[] = [];

  displayedColumns: string[] = ['#', 'provincia', 'distrito', 'centro', 'mesa', 'porcentaje'];


  setTimerActualza: any;
  // graficos
  pieChartMesasPendientes = {};
  totalMesasVotacion = 0;
  totalMesasRegistradas = 0;

  pieChartVotosRegistrados = {};
  totalVotantes = 0;
  totalVotosRegistrados = 0;

  columnChartData2 = {};
  arrResultados = [];


  constructor(private crudService: CrudHttpClientServiceShared) { }

  ngOnInit() {
    this.loadAllVotos();
  }

  ngOnDestroy(): void {
    clearInterval(this.setTimerActualza);
  }

  loadActualizarAutomaticamente(event) {
    if (event.checked) {
      this.setTimerActualza = setInterval(() => {
        this.loadAllVotos();
      }, 7000);

      return;
    }

    clearInterval(this.setTimerActualza);
  }

  loadAllVotos(): void {
    this.filtroAplicado = false;
    this.cargandoLista = true;
    this.crudService.getall('mesaDeVotacion', 'getallMesaVoto', true).subscribe(res => {
      this.listMesasVotacion = res;
      // this.listVotos = res;
      console.log(res);
      this.loadMesasPorRegistrar();
    });
  }

  private loadMesasPorRegistrar(): void {
    this.listVotosMesasPorRegistar = this.listMesasVotacion;
    this.filtraNullBVoto002();
    this.cargandoLista = false;
  }


  getUbigeoMesa(mesas: MesaDeVotacionModel[]): void {
    this.cargandoLista = true;
    this.listMesasVotacion = mesas;
    console.log(mesas);
    this.loadMesasPorRegistrar();
    this.verFiltro = false;
    this.filtroAplicado = true;

    event.stopPropagation();
  }

  // filtrar por provincia, distrito, mientras va seleccionadno
  getUbigeoSelect(rpt: any): void {
    if (rpt.idCentroDeVotacion === undefined) { return; }

    if (rpt.idCentroDeVotacion !== null) { this.getFilterData('centroDeVotacion.idCentroDeVotacion', rpt.idCentroDeVotacion); return; }
    if (rpt.idDistrito !== null) { this.getFilterData('centroDeVotacion.distrito.iddistrito', rpt.idDistrito); return; }
    if (rpt.idProvincia !== null) { this.getFilterData('centroDeVotacion.distrito.provincia.idprovincia', rpt.idProvincia); }

    event.stopPropagation();
  }

  // nombreFiltro = obtiene el nombre del filtro provincia: moyobamaba distrito: moyo .....
  private getFilterData(campoFiltrar: string, valorFiltrar: any): void {
    const arrCampos = campoFiltrar.split('.');
    this.listVotosMesasPorRegistar = this.listMesasVotacion
      .filter(x => {
        let colFiltar = x;
        arrCampos.forEach(key => { colFiltar = colFiltar[key]; });

        if (colFiltar === valorFiltrar) { return x; }
      })
      .map(x => x);

    this.filtraNullBVoto002();
    this.filtroAplicado = true;
  }

  // mesas que faltan registrar actas o incompletas
  private filtraNullBVoto002(): void {
    this.listVotosMesasPorRegistarMostar = this.listVotosMesasPorRegistar
      .map(x => {
        let porcentajeVotos = 0;
        let numVotos = 0;
        if (x.voto001s) {
          const listVot001 = x.voto001s;
          listVot001.map(voto => {
            if ( !voto.voto002s ) {return; }
            const _arrVotos = this.porcentajeVotosRegistrados(x.numeroDeVotantes, x.voto001s[0].voto002s);
            porcentajeVotos = _arrVotos.porcentaje;
            numVotos = _arrVotos.numVotos;
          });
        }

        x.porcentajeVotosRegistrados = porcentajeVotos;
        x.numVotosRegistrados = parseFloat(numVotos.toString());
        return x;
      })
      .filter(x => x.porcentajeVotosRegistrados <= 100)
      .map(x => x);

      console.log(this.listVotosMesasPorRegistarMostar);

      this.getTotalMesasRegistradas();
      this.getTotalMesasVotacion();

      this.getTotalVotantes();
      this.getTotalVotosRegistrados();

      this.getResultados();

      // this.renderGrafico();
  }

  // compara la cantidad de votos de mesa con la cantidad de votos del acta registrada
  private porcentajeVotosRegistrados(numeroVotantesMesa: number,  voto002s: Voto002Model[]): any {
    const numeroVotosActa = voto002s.map(t => t.voto).reduce((acc, value) => acc + value, 0);
    const porcentajeVotosRegistrados = parseFloat(((numeroVotosActa / numeroVotantesMesa) * 100).toString()).toFixed(1);
    return {'porcentaje': parseFloat(porcentajeVotosRegistrados), 'numVotos': numeroVotosActa};
  }


  getTotalMesasRegistradas() {
    this.totalMesasRegistradas = 0;
    if (this.listMesasVotacion === undefined) { return 0; }
    this.totalMesasRegistradas = this.listVotosMesasPorRegistar.filter(x => x.flagRegistrado).map(x => x).length;

  }

  getTotalMesasVotacion() {
    this.totalMesasVotacion = 0;
    if (this.listMesasVotacion === undefined) { return 0; }
    this.totalMesasVotacion = this.listMesasVotacion.length;
  }

  getTotalVotantes() {
    this.totalVotantes = 0;
    if (this.listVotosMesasPorRegistar === undefined) { return 0; }
    this.totalVotantes = this.listVotosMesasPorRegistar.map(t => t.numeroDeVotantes).reduce((acc, value) => acc + value, 0);
  }

  getTotalVotosRegistrados() {
    this.totalVotosRegistrados = 0;
    if (this.listVotosMesasPorRegistar === undefined) { return 0; }
    this.totalVotosRegistrados = this.listVotosMesasPorRegistar.map(t => t.numVotosRegistrados).reduce((acc, value) => acc + value, 0);
  }

  getResultados() {
    if (this.listVotosMesasPorRegistar === undefined) { return; }
    this.arrResultados = [];
    this.listVotosMesasPorRegistar.filter(x => x.flagRegistrado)
    .map(x => {
      if (!x.voto001s) { return; }
      const listVot001 = x.voto001s;
      listVot001.map((voto: Voto001Model) => {
        if ( !voto.voto002s ) {return; }
        const listVoto002 = voto.voto002s;
        listVoto002.map( (voto002: Voto002Model) => {
          const idcandidato = voto002.plantilla002.candidato.agrupacion.dscagrupacion;
          const numvotos = voto002.voto;
          if (!this.arrResultados[idcandidato]) {
            this.arrResultados[idcandidato] = { 'agrupacion': idcandidato, 'votos': numvotos };
            // this.arrResultados[idcandidato] = numvotos;
          } else {
            this.arrResultados[idcandidato].votos += numvotos;
            // this.arrResultados[idcandidato] += numvotos;
          }
        });
      });
    });


    const arr_ = Object.keys(this.arrResultados).map(key => this.arrResultados[key]);
    this.arrResultados = arr_;
    // this.arrResultados = _arr.map( x => {
    //   return [x.agrupacion, x.votos];
    // });

    // this.totalVotosRegistrados = this.arrResultados.map(t => t.votos).reduce((acc, value) => acc + value, 0);
    this.renderGrafico();
    console.log(this.arrResultados);
  }


  quitarFiltro(): void {
    this.listVotosMesasPorRegistar = [];
    this.listVotosMesasPorRegistarMostar = [];
    this.loadAllVotos();
  }

  private renderGrafico(): void {
    this.pieChartMesasPendientes = {
      chartType: 'PieChart',
      dataTable: [
        ['A', 'B'],
        ['Mesas Registradas', this.totalMesasRegistradas],
        ['Total Mesas', this.totalMesasVotacion]
      ],
      options: { legend: 'none',
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true
        } },
    };

    this.pieChartVotosRegistrados = {
      chartType: 'PieChart',
      dataTable: [
        ['A', 'B'],
        ['Votos Registrados', this.totalVotosRegistrados],
        ['Total Votantes', this.totalVotantes]
      ],
      options: { legend: 'none',
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true
        } },
    };

    this.columnChartData2 = {
      chartType: 'ColumnChart',
      dataTable: [
        ['A', 'B'],
        [this.arrResultados[0].agrupacion, this.arrResultados[0].votos],
        [this.arrResultados[1].agrupacion, this.arrResultados[1].votos],
        [this.arrResultados[2].agrupacion, this.arrResultados[2].votos],
        [this.arrResultados[3].agrupacion, this.arrResultados[3].votos]
      ],
      options: {
        legend: 'none',
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true
        }
      }
    };
  }


}
