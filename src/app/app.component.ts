import { Component, OnInit } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import * as $ from 'jquery';

// import { element } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Logical Sistemas S.A.S';
  // hash: HTMLImageElement; /* Defining element */

// ...

// this.element = document.createElement('img'); /*creating a img*/

  public tiltes = [
    {
      titulo: 'Software',
      imagen: 'service_1-min.jpg',
    },
    {
      titulo: 'Aplicaciones Web',
      imagen: 'service_2-min.jpg',
    },
    {
      titulo: 'Diseño UX - UI',
      imagen: 'service_3-min.jpg',
    },
    {
      titulo: 'Aplicaciones Moviles',
      imagen: 'service_4-min.jpg',
    },
  ];

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function() {

      $(window).scroll(function() {
         // tslint:disable-next-line:no-var-keyword
       // tslint:disable-next-line:prefer-const
     let barra = $(window).scrollTop();
       if (barra > 700) {
         // tslint:disable-next-line:prefer-const
         let posicion = barra * 0.10;
        $('.main-soluciones').css({
           'background-position': '0 -' + posicion + 'px'
         } );
       }
     });

    });
    }
}
