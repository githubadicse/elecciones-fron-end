import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  opened: boolean=true;

  constructor() { }

  ngOnInit() {
  }

  routerlink(e){
    console.log(e)
  }

}
