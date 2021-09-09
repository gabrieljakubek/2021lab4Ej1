import { UsuarioService } from './services/usuario.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { Ejercicio1Component } from './page/ejercicio1/ejercicio1.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './page/registro/registro.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Ejercicio1Component,
    BienvenidoComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    MenuPrincipalComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
