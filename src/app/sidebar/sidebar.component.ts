import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  imageUrl: string;
  width: number;
  imageBorder: string;
  isActive:boolean;

  constructor() {
    this.width = 100;
    this.imageUrl = "http://www.placehold.it/50x50";
    this.imageBorder = '2px solid red';
    this.isActive = false;
  }

  ngOnInit() {
  }
  changeImage() {
      this.imageBorder = '4px solid green';
      this.width = 300; 
      this.isActive = true;
     
  }

}
