import { Utils } from './../../classes/utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }
  public bk: string = Utils.getUrlappBK();
  ngOnInit(): void {
  }
  public regresar(): any {
    this.router.navigate(['login']);
  }
  public quiensoy(): any {
    this.router.navigate(['about']);
  }
}
