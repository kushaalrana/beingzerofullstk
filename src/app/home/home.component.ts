import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:string = "RANDOM Data";
Y:number = 1;
z = true;
  constructor() { }

  ngOnInit() {
    this.x = this.x + " Hey";
  }
  fnclick(){
    this.x = this.x + "   Kushaal";
  }

}
