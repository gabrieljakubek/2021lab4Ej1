import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ejer1', component: Ejercicio1Component },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
