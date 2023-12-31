import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor() {}

  ngOnInit() {}
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
}
