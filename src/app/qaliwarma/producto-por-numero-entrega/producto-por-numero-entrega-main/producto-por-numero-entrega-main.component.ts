import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ItemEntregaModel } from '../../item-entrega/item-entrega-model';
import { ItemEntregaService } from '../../item-entrega/item-entrega.service';
import { ProductoPorNumeroEntregaService } from '../producto-por-numero-entrega.service';
import { ProductoPorNumeroEntregaModel } from '../producto-por-numero-entrega-model';
import { CatalogoProductoService } from '../../catalogo-producto/catalogo-producto.service';
import { CatalogoProductoModel } from '../../catalogo-producto/catalogo-producto-model';
import { isUndefined } from 'util';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { MatTableDataSource, MatTable } from '@angular/material';
import swal from 'sweetalert2';


@Component({
  selector: 'app-producto-por-numero-entrega-main',
  templateUrl: './producto-por-numero-entrega-main.component.html',
  styleUrls: ['./producto-por-numero-entrega-main.component.css'],
  providers: [ItemEntregaService, ProductoPorNumeroEntregaService, CatalogoProductoService,
    CrudHttpClientServiceShared]
})
export class ProductoPorNumeroEntregaMainComponent implements OnInit {

  selectedRowIndex: string = "";

  dataForm: any;
  public anno: number = 2018;
  public numeroEntrega: number = 1;
  public titulo = "PRODUCTOS POR ITEM Y NUMERO DE ENTREGA";
  public itemEntregaModel: ItemEntregaModel;
  public itemEntregasModel: ItemEntregaModel[];

  public ProductoPorNumeroEntregasModel: ProductoPorNumeroEntregaModel[];

  public catalogoProductosModel: CatalogoProductoModel[];

  dataSource: MatTableDataSource<ProductoPorNumeroEntregaModel>;

  displayedColumns = ['entregaPorItem.itemEntrega.anno', 'entregaPorItem.numeroEntrega.numeroEntregaValor', 'entregaPorItem.itemEntrega.item', 'catalogoProductoQaliwarma.dscCatalogoProductoQaliwarma', 'edit', 'action'];

  @ViewChild('table') matTable: MatTable<Element>;

  selected: any;
  constructor(private formBuilder: FormBuilder, private itemEntregaService: ItemEntregaService,
    private productoPorNumeroEntregaService: ProductoPorNumeroEntregaService,
    private catalogoProductoService: CatalogoProductoService,
    breakpointObserver: BreakpointObserver,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared
  ) {

    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        this.displayedColumns :
        this.displayedColumns;
    });

  }

  ngOnInit() {
    this.numeroEntrega = parseInt(localStorage.getItem("numeroEntrega"));
    this.getCatalogoProducto();
    this.buildForm();
    this.getItems()
  }

  getCatalogoProducto() {
    this.catalogoProductoService.getAll()
      .subscribe(
        res => {
          this.catalogoProductosModel = res;
        }
      )
  }

  highlight(row) {

    this.selectedRowIndex = row.idProductoPorNumeroEntrega;
  }

  buildForm() {
    this.dataForm = this.formBuilder.group({
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.numeroEntrega, Validators.required],


    })
  }


  compareFnProducto(t1: any, t2: any): boolean {


    if (t2.idCatalogoProductoQaliwarma == null || isUndefined(t2.idCatalogoProductoQaliwarma) || t1.idCatalogoProductoQaliwarma == null || isUndefined(t1.idCatalogoProductoQaliwarma))
      return;


    if (t1.idCatalogoProductoQaliwarma === t2.idCatalogoProductoQaliwarma) {
      return true;
    }

  }
  getItems() {
    this.itemEntregaService.getItems(this.anno)
      .subscribe(
        res => {
          this.itemEntregasModel = res;

        }
      )
  }

  getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem() {

    this.productoPorNumeroEntregaService.getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem(this.anno, this.numeroEntrega, this.selected)
      .subscribe(
        res => {

          this.ProductoPorNumeroEntregasModel = res;
          this.dataSource = new MatTableDataSource(this.ProductoPorNumeroEntregasModel);
          console.log(this.ProductoPorNumeroEntregasModel);
        }
      )

  }

  cargarData() {
    this.numeroEntrega = this.dataForm.controls['numeroEntrega'].value;
    this.anno = this.dataForm.controls['anno'].value;
    this.getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem();
  }

  changeValue(e) {
    this.cargarData();

  }

  update(e) {
    //console.log(e);

    this.crudHttpClientServiceShared.update(JSON.stringify(e), "productoPorNumeroEntrega", "update")
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        },

        () => {

          swal({
            position: 'top-end',
            type: 'success',
            title: 'Registro Actualizado',
            showConfirmButton: false,
            timer: 1500
          })

        }
      )
  }
}
