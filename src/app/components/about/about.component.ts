import { Utils } from './../../classes/utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public bk: string = Utils.getUrlappBK();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  public home(): any {
    this.router.navigate(['home']);
  }
}
