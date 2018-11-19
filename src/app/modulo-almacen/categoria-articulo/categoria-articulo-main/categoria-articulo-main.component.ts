import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/primeng';
import { CategoriaArticuloModel } from '../categoria-articulo-model';


@Component({
  selector: 'app-categoria-articulo-main',
  templateUrl: './categoria-articulo-main.component.html',
  styleUrls: ['./categoria-articulo-main.component.css'],
  providers: [ConfirmationService]
})
export class CategoriaArticuloMainComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }



}
