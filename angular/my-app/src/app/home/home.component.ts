import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name:string = "shahad";
age:number = 28;
imgSrc:string= "assets/db139493522503.5e673c880afbc.png";

change:boolean=true;

changeClass() {
  if(this.change==true) {
    this.change=false;
  }else {
    this.change=true;
  }
}



welcome() {
  alert("hi")
}


person:string[]=["ahmed", "ali","omar"];

all:object[] = [
  {name:'shahad', age:28, salary:2900},
  {name:'ali', age:25, salary:3000},
  {name:'hiam', age:30, salary:4000},
  {name:'hind', age:27, salary:1000}
]
  constructor() { }

  ngOnInit(): void {
  }

}
