import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'

@Component({
  selector: 'overseer-clone-carousel',
  templateUrl: './carousel.component.html',
  styles: [],
})
export class CarouselComponent {
  constructor() {
    register()
  }
}
