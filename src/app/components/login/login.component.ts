import { Utils } from './../../classes/utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  public user: string = '';
  public password: string = '';
  public newUser: string = '';  
  public newPassword: string = '';
  public autoUser: string = 'admin';
  public autoPassword: string = '123456';
  public mostrarLogin :boolean = true;
  public mostrarReg :boolean = false;
  public mostrar :boolean = false;
  public bk: string = Utils.getUrlLoginBK();

  autoCompletar(){
    this.user = this.autoUser;
    this.password = this.autoPassword;
  }
  login() {
    if (this.user === this.autoUser && this.password === this.autoPassword) {
      this.router.navigate(['home']);
    } else {
      console.log('Acceso denegado');
    }
  }  
  registrarse() {
    this.cambiarVisibilidad();
  }
  cambiarVisibilidad(){
    this.mostrarLogin = !this.mostrarLogin;
    this.mostrarReg = !this.mostrarReg;
    this.mostrar = false;
  }
  mostrarPassword(){
    this.mostrar = !this.mostrar;
  }
  public regresar(): any {
    this.router.navigate(['']);
  }
}