import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  public usuarioActual:string = "";
  constructor(public autentificar: AuthService, public rutas:Router,public usuario: UsuarioService) { 
    this.usuarioActual = usuario.datos.email;
  }
  ngOnInit(): void {
  }
  public quiensoy(): any {
    this.rutas.navigate(['about']);
  }
  public ejercicio1(): any {
    this.rutas.navigate(['ejer1']);
  }
  public home(): any {
    this.rutas.navigate(['home']);
  }
}
