import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { PersoneroModel } from '../../../model/personero-model';
import swal from 'sweetalert2';
import { MSJ_LOADING, MSJ_SUCCESS } from 'src/app/shared/config.service.const';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personero-edit',
  templateUrl: './personero-edit.component.html',
  styleUrls: ['./personero-edit.component.scss']
})
export class PersoneroEditComponent implements OnInit {

  form: FormGroup;
  id: any;

  @ViewChild('txtPersonero') txtPersonero: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudHttpClientServiceShared,
    private activateRoute: ActivatedRoute,
  ) {
    this.activateRoute.params.subscribe(
      params => this.id = params['id']);

  }

  ngOnInit() {
    this.prepararFormulario();

    if (this.id !== '0') {
      this.editar();
    }
  }

  prepararFormulario() {
    this.form = this.formBuilder.group({
      nombrepersonero: ['', Validators.required],
      dni: ['', Validators.required],
      idpersonero: ''
    });
  }


  editar(): void {
    this.crudService.edit(this.id, 'personero', 'edit', true).subscribe((res: PersoneroModel) => {
      this.form.controls['nombrepersonero'].setValue(res.nombrepersonero);
      this.form.controls['dni'].setValue(res.dni);
      this.form.controls['idpersonero'].setValue(res.idpersonero);
     });
  }

  public GuardarProducto(): void {
    if (!this.form.valid) { return; }
    const idpersonero = this.form.controls['dni'].value;

    if (this.id === '0') {
      this.form.controls['idpersonero'].setValue(idpersonero);
    }

    const data = <PersoneroModel>this.form.value;


    swal(MSJ_LOADING);

    this.crudService.create(data, 'personero', 'create', true).subscribe(
    (res: any) => {
      console.log(res);
      swal(MSJ_SUCCESS);
      this.form.reset();
      this.txtPersonero.nativeElement.focus();
    });
  }

}
