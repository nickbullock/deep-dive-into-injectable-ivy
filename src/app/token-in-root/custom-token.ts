import { InjectionToken } from '@angular/core';

export class CustomToken {
  call() {
    console.log('>>>>> CustomToken call!');
  }
}

export const CUSTOM_TOKEN = new InjectionToken('CUSTOM', {
  providedIn: 'root',
  factory: () => new CustomToken()
});
