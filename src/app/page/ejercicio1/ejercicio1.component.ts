import { Utils } from '../../classes/utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})

export class Ejercicio1Component implements OnInit {

  ngOnInit(): void {
  }
  public edadUno!: number;
  public edadDos!: number;
  public resultado!: number;
  public promedio!: number;
  public bk: string = Utils.getUrlLoginBK();

  constructor(public router: Router) {
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
  public regresar(): any {
    this.router.navigate(['']);
  }
}