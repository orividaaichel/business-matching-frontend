import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
  isSideMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    this.hoverTest();
  }

  hoverTest() {
      $(".menu-content-icons-mode").on({
        mouseenter: function () {
          $('.wrapper').css({
            'margin-left':'220px'
          });
          $('.nav-side-menu').css({
            'width':'220px'
          });
          $('.title_dashboard_sub').css({
            'margin-left':'0'
          });
        },
        mouseleave: function () {
          $('.wrapper').css({
            'margin-left':'50px'
          });
          $('.nav-side-menu').css({
            'width':'50px'
          });
          $('.title_dashboard_sub').css({
            'margin-left':'-200px'
          });
          $('.sub-menu').removeClass('in');
        }
    });
  }

  toggleUserDropDown() {
    this.isUserMenuOpen = !this.isUserMenuOpen
    if(this.isUserMenuOpen) {
      $('.user-menu-dropdown').css({
        'display':'block'
      });
    } else {
      $('.user-menu-dropdown').css({
        'display':'none'
      });
    }
  }

  clickEvent(){
      this.isSideMenuOpen = !this.isSideMenuOpen;    
      if(this.isSideMenuOpen) {
        $('.nav-side-menu').css({
          'width':'50px'
        });
        $('.menu-content').css({
          'display':'none'
        }); 
        $('.menu-content-icons-mode').css({
          'display':'block'
        }); 
        $('.wrapper').css({
          'margin-left':'50px'
        });
      } else {
        $('.nav-side-menu').css({
          'width':'220px'
        });
        $('.menu-content').css({
          'display':'block'
        }); 
        $('.menu-content-icons-mode').css({
          'display':'none'
        }); 
        $('.wrapper').css({
          'margin-left':'220px'
        });
      }
  }
}