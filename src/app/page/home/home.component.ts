import { UsuarioService } from './../../services/usuario.service';
import { Utils } from '../../classes/utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuarioActual:string = "";
  constructor(public rutas:Router,public usuario: UsuarioService) { 
    this.usuarioActual = usuario.datos.email;
  }
  public bk: string = Utils.getUrlappBK();
  ngOnInit(): void {

  }
  public hola(): any {
    console.log(this.usuario);
    console.log('hola');
  }
}
