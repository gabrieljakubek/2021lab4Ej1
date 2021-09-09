import { Usuario } from './../classes/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public datos:Usuario = new Usuario();
 
  constructor() {
  }
}
