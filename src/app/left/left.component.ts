import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
  <h3>เมนูหลัก</h3>
    <p>
      FirstName : <input (keyup) = "onKey($event)">
      <br>
      {{firstName}}
      <br>
      LastName : <input #a (keyup.enter) = "onEnter(a.value)" (blur)="onEnter(a.value)">
      {{lastName}}
    </p>
  `,
  styles: [
  `
  p { color : red;}
  h3 { color : green;}
  `
  ]
})
export class LeftComponent implements OnInit {
  firstName : string;
  lastName :string;

  constructor() { }

  ngOnInit() {
  }
  // onKey(event:KeyboardEvent){
  //   this.firstName =  (<HTMLInputElement>event.target).value;
  // }
  onKey(event:any){
    this.firstName = event.target.value;
  }
  onEnter(value:string){
    this.lastName = value;
  }

}
