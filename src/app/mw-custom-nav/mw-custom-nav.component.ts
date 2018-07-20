import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mw-custom-nav',
  templateUrl: './mw-custom-nav.component.html',
  styleUrls: ['./mw-custom-nav.component.css']
})
export class MwCustomNavComponent implements OnInit {
  timer;
  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.initialize();
  }

  public register(){
    this.router.navigate(['registration'])
  }

  ngOnDestroy(){
    clearInterval(this.timer)
  }

  search_id: string = "all";
  initialize(){  

    $('.nav-pills li').on('click','.search-category',function(){
      this.search_id = $(this).attr('id');
    })
   
    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
    
    $(window).resize(function(){
      var viewportWidth = $(window).innerWidth();
      if (viewportWidth < 975 || mobile) {
          $('.btn-bar').show()
        }else{
          $('.btn-bar').hide();
        }
    })
    
    $('.nav-mobile-container').on('click','.btn-arrow-right',function(e){
      e.preventDefault();
      $(this).parent().hide();
    })

    $('.nav-mobile').on('click','.btn-bar',function(){
      $('.nav-mobile-container').show();
    })

    $(".nav-pills, .mobile-category",).on('click', 'li,a', function() {
      $('.nav-pills li.active, .mobile-category a.active').removeClass('active');
      $(this).addClass('active');

      var classname = $(".nav-pills li.active a, .mobile-category a.active").attr("id");

      switch(classname){
        case "all":
        $('.input-search').css({'border': '2px solid #27B98A'})
        $('.search-button, .link-search').css({
          'background': '#27B98A',
          'border' : '2px solid #27B98A',
          'color': 'white'
        })
        break;
        case "ps":
        $('.input-search').css({'border': '2px solid #2196F3'})
        $('.search-button, .link-search').css({
          'background': '#2196F3',
          'border' : '2px solid #2196F3',
          'color': 'white'
        })
        break;
        case "cn":
        $('.input-search').css({'border': '2px solid #0F5665'})
        $('.search-button, .link-search').css({
          'background': '#0F5665',
          'border' : '2px solid #0F5665',
          'color': 'white'
        })
        break;
        case "tl":
        $('.input-search').css({'border': '2px solid #FF9800'})
        $('.search-button, .link-search').css({
          'background': '#FF9800',
          'border' : '2px solid #FF9800',
          'color': 'white'
        })
        break;
        case "oc":
        $('.input-search').css({'border': '2px solid #5bc0de'})
        $('.search-button, .link-search').css({
          'background': '#5bc0de',
          'border' : '2px solid #5bc0de',
          'color': 'white'
        })
        break;
        default:
        $('.input-search').css({'border': '2px solid #AAA'})
        $('.search-button, .link-search').css({
          'background': '#AAA',
          'border' : '2px solid #AAA',
          'color': 'white'
        })
      }
    });
   

    $('#category li.nav-item').on('click','a',function(){
      $('#category li.nav-item a.active').removeClass('active');
      $(this).addClass('active');
    })

    $('ul.expandable li a').prepend("<i class='fa fa-angle-right' style='padding-right:8px'></i>")

    $(function() {

      $('div.expandable').each(function(){
          var $ul = $(this),
              $lis = $ul.find('.list-item:gt(1)'), // displays 2 rows
              isExpanded = $ul.hasClass('expanded');
          $lis[isExpanded ? 'show' : 'hide']();
          
          if($lis.length > 0){
              $ul
                  .append($('<div class="btn btn-primary expand" style="float:right;margin-top:10px;">' + (isExpanded ? 'Less' : 'More') + '</div>')
                  .click(function(event){
                      var isExpanded = $ul.hasClass('expanded');
                      event.preventDefault();
                      $(this).text(isExpanded ? 'More' : 'Less');
                      $ul.toggleClass('expanded');
                      $lis.toggle();
                  }));
          }
      });
  
      $('ul.expandable').each(function(){
          var $ul = $(this),
              $lis = $ul.find('li:gt(2)'), // displays 3 items
              isExpanded = $ul.hasClass('expanded');
          $lis[isExpanded ? 'show' : 'hide']();
          
          if($lis.length > 0){
              $ul
                  .append($('<li class="expand"><a style="color: #AE0000;font-size:12px;"><i class="fa fa-angle-right text-danger" style="padding-right:8px"></i>' + (isExpanded ? 'Less' : 'More') + '</a></li>').css({'cursor':'pointer'})
                  .click(function(event){
                      var isExpanded = $ul.hasClass('expanded');
                      event.preventDefault();
                      $(this).html(isExpanded ? 
                      '<a style="color: #AE0000;font-size:13px;"><i class="fa fa-angle-right text-danger" style="padding-right:8px"></i>More</a>' : 
                      '<a style="color: #AE0000;font-size:13px;"><i class="fa fa-angle-right text-danger" style="padding-right:8px"></i>Less</a>');
                      $ul.toggleClass('expanded');
                      $lis.toggle();
                  }));
          }
      });
      
  
    })

    
  
    // $(".expandable li").on('click','a',function(){
    //   var text = $(this).attr("id")
      
    //   switch(text){
    //     case "toggleOne":
    //     $(this).parent().toggleClass('expanded')

    //     $(this).parent().hasClass('expanded') ? $('#'+text).text("Less") : $('#'+text).text("More")
    //     $('.toggle-one.expandable li:nth-child(3)').nextUntil($('.toggle-one.expandable li:last-child')).toggleClass('hidden-list')
        
    //     break;
    //     case "toggleTwo":
    //     alert(text);
    //     break;
    //   }
    // })
  }


  nextPage() {
    this.search_id = $('.nav-pills li.active a').attr('id');
    
    this.router.navigate(['search-result'], { queryParams: { keyword: '', category: this.search_id} });
  }

}

