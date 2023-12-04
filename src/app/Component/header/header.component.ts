// header.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../share/shared.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ width: 'calc(100vw - 300px)' })),
      state('closed', style({ width: 'calc(100vw - 25px)' })),
      transition('open <=> closed', animate('0.3s')),
    ]),
  ],
})
export class HeaderComponent {
  isMenuOpen: boolean = true;

  constructor(private sharedService: SharedService) {}

  toggleNavigation() {
    this.sharedService.toggleNavigation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
