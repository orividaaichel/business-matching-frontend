import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mw-companydesc',
  templateUrl: './mw-companydesc.component.html',
  styleUrls: ['./mw-companydesc.component.css']
})
export class MwCompanydescComponent implements OnInit {

  private image1: String;
  private image2: String;
  private image3: String;
  private image4: String;
  private imageMain: String;
  private hasRead: boolean = false;
  private hideLess: String = "none";
  private hideMore: String = "block";
  private readMore: object = {
    "readMoreContent": this.hasRead,
    "readContent": !this.hasRead
  }
 
  constructor() { }

  ngOnInit() {
    this.image1 = "https://source.unsplash.com/s5WyoKsayo0";
    this.image2 = "https://source.unsplash.com/cnseVhmbA7k";
    this.image3 = "https://source.unsplash.com/wgivdx9dBdQ";
    this.image4 = "https://source.unsplash.com/GWe0dlVD9e0";
    this.imageMain = this.image1;
  }

  clickMore(){
    this.hideLess = "block";
    this.hideMore = "none";
    this.hasRead = true;
    this.readMore = {
      "readMoreContent": this.hasRead,
      "readContent": !this.hasRead
    }
  }

  clickLess(){
    this.hideLess = "none";
    this.hideMore = "block";
    this.hasRead = false;
    this.readMore = {
      "readMoreContent": this.hasRead,
      "readContent": !this.hasRead
    }
  }

  onHoverEnter1() {
    this.imageMain = this.image1;
    console.log('hovered');
  }

  onHoverEnter2() {
    this.imageMain = this.image2;
    console.log('hovered');
  }

  onHoverEnter3() {
    this.imageMain = this.image3;
    console.log('hovered');
  }

  onHoverEnter4() {
    this.imageMain = this.image4;
    console.log('hovered');
  }

}
