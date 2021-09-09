import { UsuarioCarga } from './../../classes/usuario-carga';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'utn-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public user: string = '';
  public email: string = '';
  public password: string = '';
  public noMostrarError: boolean = true;
  public mensajeError: string = '';
  constructor(private rutas: Router, public authService: AuthService) {}

  ngOnInit(): void {}
  public iniciarsesion(): any {
    this.rutas.navigate(['login']);
  }

  public async registrarse() {
    this.noMostrarError = true;
    if (this.email != '' && this.password != '') {
      let usuario = new UsuarioCarga(this.user, this.email, this.password);
      let status: string = await this.authService.SignUp(usuario);
      if (status != 'okay') {
        if (status == 'auth/invalid-email') {
          this.mostrarError('Email invalido');
        } else if (status == 'auth/email-already-in-use') {
          this.mostrarError('Email ya registrado');
        }else if (status == 'auth/weak-password') {
          this.mostrarError('Contraseña muy debil');
        } else {
          this.mostrarError('Error al registrarse');
        }
      }
      else{
        let status: boolean =  this.authService.isLoggedIn;
        if (status) {
          this.rutas.navigate(['home']);          
        }else {
          this.mostrarError('Fallo al loggear');
        }
      }
    } else {
      this.mostrarError('Se deben completar todos los campos para registrarse');
    }
  }

  public mostrarError(mensaje: string) {
    this.noMostrarError = false;
    this.mensajeError = mensaje;
  }
}
