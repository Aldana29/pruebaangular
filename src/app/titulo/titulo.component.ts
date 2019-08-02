import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;

  constructor() { }

  ngOnInit() {
    console.log("el titulo es:", this.titulo);
    // let titulo = "hola mundo";
  }

}
