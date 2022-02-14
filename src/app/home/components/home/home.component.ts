import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // Now you can use Swiper
  mySwiper!: Swiper
    
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { // cuando los elementos hijos ya han sido inicializados
      this.mySwiper = new Swiper('.swiper');
  }

}
