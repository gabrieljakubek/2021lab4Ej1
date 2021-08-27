import { Usuario } from './classes/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public edadUno!: number;
  public edadDos!: number;
  public resultado!: number;
  public promedio!: number;
  constructor() {
    this.edadUno =0;
    this.edadDos =0;
    this.resultado = 0;
    this.promedio = 0;
  }
  calcular() {
    this.resultado = this.edadUno + this.edadDos;
    this.promedio = this.resultado / 2;
  }
  limpiar(){
    this.edadUno =0;
    this.edadDos =0;
    this.resultado = 0;
    this.promedio = 0;
  }
}


  