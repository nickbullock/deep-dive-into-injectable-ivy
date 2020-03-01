
import { InjectionToken } from '@angular/core';

export class CustomLimpToken {
  call() {
    console.log('>>>>> CustomLimpToken call!');
  }
}

export const CUSTOM_LIMP_TOKEN = new InjectionToken('CUSTOM_LIMP', {
  providedIn: 'root',
  factory: () => new CustomLimpToken()
});
