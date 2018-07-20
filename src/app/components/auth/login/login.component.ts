import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isLogged: string = "0";
  login(){
    this.isLogged = "1";
    sessionStorage.setItem('isLogged', this.isLogged);
    this.router.navigate([''])
  }
}