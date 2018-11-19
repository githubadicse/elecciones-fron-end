import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { CategoriaArticuloModel } from '../../../modulo-almacen/categoria-articulo/categoria-articulo-model';


@Component({
  selector: 'app-guia-remision-list',
  templateUrl: './guia-remision-list.component.html',
  styleUrls: ['./guia-remision-list.component.css']
})
export class GuiaRemisionListComponent implements OnInit {

  show: boolean = true
  msgs: Message[] = [];

  public categoriaArticuloModel: CategoriaArticuloModel;
  public categoriaArticulosModel: CategoriaArticuloModel[];

  public titulo: string = "Categorias";

  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;

  
  constructor() { }

  ngOnInit() {
  }

}
