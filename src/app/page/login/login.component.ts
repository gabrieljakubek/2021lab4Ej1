import { UsuarioCarga } from './../../classes/usuario-carga';
import { AuthService } from './../../services/auth.service';
import { UsuarioService } from './../../services/usuario.service';
import { Utils } from '../../classes/utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private rutas: Router,
    private usuario: UsuarioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}
  public user: string = '';
  public email: string = '';
  public password: string = '';
  public autoEmail: string = 'gabrieljakubek@gmail.com';
  public autoPassword: string = 'prueba1234';
  public mostrarLogin: boolean = true;
  public mostrarReg: boolean = false;
  public mostrar: boolean = false;
  public noMostrarError: boolean = true;
  public mensajeError: string = '';

  autoCompletar() {
    this.email = this.autoEmail;
    this.password = this.autoPassword;
  }
  async login() {
    this.noMostrarError = true;
    if (this.email != '' && this.password != '') {
      let usuario = new UsuarioCarga(this.user, this.email, this.password);
      let status = await this.authService.SignIn(usuario);
      if (status != 'okay') {
        if (status == 'auth/wrong-password') {
          this.mostrarError('Email o Contraseña invalida');
        } else if (status == 'auth/user-not-found') {
          this.mostrarError('Email no registrado');
        } else if (status == 'auth/weak-password') {
          this.mostrarError('Contraseña muy debil');
        } else {
          this.mostrarError('Error al registrarse');
        }
      } else {
        this.rutas.navigate(['home']);
      }
    } else {
      this.mostrarError('Se deben completar todos los campos para iniciar sesion');
    }
  }
  registrarse() {
    // this.cambiarVisibilidad();
    this.rutas.navigate(['registro']);
  }
  mostrarPassword() {
    this.mostrar = !this.mostrar;
  }
  public siguiente(): any {
    this.usuario.datos.displayName = 'lalalala';
    console.log('siguiente');
    console.log(this.usuario.datos.displayName);
    var modelo = this;

    setTimeout(function () {
      modelo.rutas.navigate(['home']);
    }, 2000);
  }

  public mostrarError(mensaje: string) {
    this.noMostrarError = false;
    this.mensajeError = mensaje;
  }
}
