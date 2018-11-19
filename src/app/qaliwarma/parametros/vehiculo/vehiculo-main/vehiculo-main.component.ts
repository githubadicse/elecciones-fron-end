import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo-main',
  templateUrl: './vehiculo-main.component.html',
  styleUrls: ['./vehiculo-main.component.css']
})
export class VehiculoMainComponent implements OnInit {

  public titulo:string = "Vehiculos"
  constructor() { }

  ngOnInit() {
  }

}
