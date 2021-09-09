export class UsuarioCarga {
  usuario: string;
  password: string;
  email: string;
  constructor(usuario: string, email: string, password: string) {
    this.usuario = usuario;
    this.password = password;
    this.email = email;
  }
}
