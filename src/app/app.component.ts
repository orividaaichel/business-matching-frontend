import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  hideElement = false;

  constructor(private router : Router, private progress: LoadingBarService) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log((this.router.url.indexOf('/admin')));
        if ((this.router.url.indexOf('/admin') == 0) || (this.router.url.indexOf('/user/login') == 0)) {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });

  }
  ngOnInit(){
    // this.progress.start();
  }
}
