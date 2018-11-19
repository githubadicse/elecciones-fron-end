import { Component, OnInit } from '@angular/core';
import { CatalogoProductoModel } from '../catalogo-producto-model';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../shared/servicio/shared.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoPresentacionModel } from '../../producto-presentacion/producto-presentacion-model';
import { ProductoPresentacionService } from '../../producto-presentacion/producto-presentacion.service';
import { MenuItem } from 'primeng/primeng';

import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';

import swal from 'sweetalert2'
import { PikingModel } from '../../piking/piking-model';
import { RequerimientoVolumen001Model } from '../../requerimiento-volumen-001/requerimiento-volumen-001-model';


@Component({
  selector: 'app-catalogo-producto-edicion',
  templateUrl: './catalogo-producto-edicion.component.html',
  styleUrls: ['./catalogo-producto-edicion.component.css'],
  providers: [ProductoPresentacionService, CrudHttpClientServiceShared]
})
export class CatalogoProductoEdicionComponent implements OnInit {
  sub: any;
  msgPopup: any[];
  id: any;
  public anno: number = 2018;
  public numeroEntrega: number = 1;

  public catalogoProductoModel: CatalogoProductoModel = new CatalogoProductoModel();
  public catalogoProductoForm: any;


  public productoPresentacionModel: ProductoPresentacionModel;
  public productoPresentacionsModel: ProductoPresentacionModel[];

  public pikingModel:PikingModel[];

  public requerimientoVolumen001SeleccionadosModel:RequerimientoVolumen001Model[];
  

  items: MenuItem[];

  constructor(
    private formBuilder: FormBuilder,
  
    private route: ActivatedRoute,
    private productoPresentacionService: ProductoPresentacionService,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared

  ) {
    this.sub = this.route.params.subscribe(
      params => {

        this.id = params['id'];
      }
    );




  }

  ngOnInit() {
    this.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));
    this.buildForm();
    if (this.id != "")
      this.getCatalogoProducto();

  }

 
  addPresentacion() {
    let rand = Math.floor((Math.random() * 100) + 1);
    let id = this.id + this.anno.toString() + this.numeroEntrega.toString() + rand.toString();
    this.productoPresentacionsModel.push(new ProductoPresentacionModel("0", this.catalogoProductoModel
      , 0, "", this.anno, this.numeroEntrega

    ));

    this.productoPresentacionsModel = this.productoPresentacionsModel.slice();
  }

  delete(e) {

    swal({
      title: 'Esta Seguro?',
      text: "Esta seguro de eliminar la presentacion: " + e.dscPresentacion,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {

      if (result.value) {
        this.crudHttpClientServiceShared.delete(e.idProductoPresentacion, "productoPresentacion", "delete").subscribe(
          res => {
            swal(
              'Deleted!',
              'El registro fue eliminado.',
              'success'
            )




          },
          error => {

            swal(
              'Deleted!',
              'El Registro No se elimino.' + error,
              'error'
            )
          }
        )

      }
    })
  }

  verId(e){
    swal("id:" + e.idProductoPresentacion)
  }

  createPresentacion(e) {
    let rand = Math.floor((Math.random() * 100) + 1);
    let id = this.id + this.anno.toString() + this.numeroEntrega.toString() + rand.toString();
    e.idProductoPresentacion = id;
    this.crudHttpClientServiceShared.create(e, "productoPresentacion", "create").subscribe(
      res => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Creado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )

  }

  updatePresentacion(e){
  
    this.crudHttpClientServiceShared.update(e,"productoPresentacion","update").subscribe(
     
     
      res=>{
        //this.productoPresentacionModel = new ProductoPresentacionModel(res.) VehiculoModel(res.idVehiculo,res.numeroPlaca);
        //this.buildForm();
        //this.flagRefreshReturn = true;
      },
      error=>console.log(error),
      ()=>{
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

  getProductoPresentacion() {

    this.productoPresentacionService.getPresentacionByIdAnnoNumeroEntrega(this.id, this.anno, this.numeroEntrega).subscribe(
      res => {
        this.productoPresentacionsModel = res.map(
          item => {
            return new ProductoPresentacionModel(item.idProductoPresentacion, item.catalogoProductoQaliwarma, item.cantidadPresentacion, item.dscPresentacion,item.anno,item.numeroEntrega,item.factorVolumenPresentacion)
          }

        )
      },
      error => { console.log(error) },
      () => {
        console.log(this.productoPresentacionsModel);
        this.productoPresentacionsModel = this.productoPresentacionsModel.slice();
      }
    )

  }

  getCatalogoProducto() {

    this.crudHttpClientServiceShared.edit(this.id, "catalogoproductoqaliwarma", "findbyid")
      .subscribe(
        res => {

          this.catalogoProductoModel = [res.data].map(
            item => {

              return new CatalogoProductoModel(
                item.idCatalogoProductoQaliwarma,
                item.dscCatalogoProductoQaliwarma,
                item.unidadmedida,
                item.productoPresentacions,
                item.entrega1,
                item.entrega2,
                item.entrega3,
                item.entrega4,
                item.entrega5,
                item.entrega6,
                item.entrega7,
                item.entrega8,
                item.entrega9,
                item.entrega10,
                item.entrega11,
                item.entrega12
                
              )
            }

          )[0];

          this.setForm(this.catalogoProductoModel);
        },
        error => console.log(error),
        () => {
          this.getProductoPresentacion();
        }
      )

  }

  buildForm() {
    this.catalogoProductoForm = this.formBuilder.group({
      idCatalogoProductoQaliwarma: ['0', Validators.required],
      dscCatalogoProductoQaliwarma: ['', Validators.required],
      unidadmedida: [''],
      entrega1 : ['',Validators.required],
      entrega2 : ['',Validators.required],
      entrega3 : ['',Validators.required],
      entrega4 : ['',Validators.required],
      entrega5 : ['',Validators.required],
      entrega6 : ['',Validators.required],
      entrega7 : ['',Validators.required],
      entrega8 : ['',Validators.required],
      entrega9 : ['',Validators.required],
      entrega10 : ['',Validators.required],
      entrega11 : ['',Validators.required],
      entrega12 : ['',Validators.required],

      productoPresentacions: ['']

    })

  }

  setForm(model: CatalogoProductoModel) {

    this.catalogoProductoForm.setValue(model);

  }

  setModel() {
    //this.marcaArticuloModel = new MarcModel();
    //this.marcaArticuloModel.idmarca = this.marcaForm.controls['idmarca'].value;
    //this.marcaArticuloModel.dscmarca = this.marcaForm.controls['dscmarca'].value;

  }




  save() {


  }


}
