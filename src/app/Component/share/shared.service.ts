// shared.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  toggleNavigationEvent = new EventEmitter<void>();

  toggleNavigation() {
    this.toggleNavigationEvent.emit();

  }
}
