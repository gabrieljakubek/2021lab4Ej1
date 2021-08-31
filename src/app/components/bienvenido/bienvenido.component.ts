import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  public opcion = Math.floor(Math.random() * 3) + 1;
  getUrl() {
    return (
      "url('/assets/images/loginBackgrounds/background" + this.opcion + ".jpg')"
    );
  }
  constructor(public router: Router) {}

  ngOnInit(): void {}
  public ejer1(): any {
    this.router.navigate(['ejer1']);
  }
  public regresar(): any {
    this.router.navigate(['']);
  }
  public login(): any {
    this.router.navigate(['login']);
  }
}
