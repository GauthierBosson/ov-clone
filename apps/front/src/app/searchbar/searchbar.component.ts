import { Component } from '@angular/core';

@Component({
  selector: 'overseer-clone-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [],
})
export class SearchbarComponent {
  constructor() {}

  toggleMenu() {
    const overlay = document.getElementById('overlay')!;
    const menu = overlay.querySelector('nav')!;

    document.body.classList.add('overflow-hidden');
    overlay.classList.remove('hidden');
    overlay.classList.add('grid', 'grid-cols-12');
    menu.classList.remove('hidden');
  }
}
