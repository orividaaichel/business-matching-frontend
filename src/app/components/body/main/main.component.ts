import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../../../assets/css/main.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  isLogged: string;
  
  ngOnInit() {
    this.isLogged = sessionStorage.getItem('isLogged')

    $('ul.expandable li a').prepend("<i class='fa fa-angle-right' style='padding-right:8px'></i>")
  }

  logout(){
    this.isLogged = null;
    sessionStorage.clear();
    this.router.navigate([''])
    console.log(sessionStorage.getItem('isLogged'))
  }

}


