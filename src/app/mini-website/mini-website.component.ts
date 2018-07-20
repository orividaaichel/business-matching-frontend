import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mini-website',
  templateUrl: './mini-website.component.html',
  styleUrls: ['./mini-website.component.css']
})
export class MiniWebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onClick(){
    console.log('HERE')
    $("html").toggleClass("openNav");
    $(".nav-toggle").toggleClass("active");
  }

  
}
