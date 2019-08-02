import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

  categoria1 = "Vuelo";
  categoria2 = "Paquete";
  categoria3 = "Hotel trivago";

  precio1 = 345;
  precio2 = 1323;
  precio3 = 123;


  constructor() { }

  ngOnInit() {
  }

}
