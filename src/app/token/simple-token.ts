import { InjectionToken } from '@angular/core';

export class SimpleTokenImplementation {
  constructor() {
    console.log('>>>> SimpleToken constructor');
  }
  call() {
    console.log('>>>>> SimpleToken call!');
  }
}

export const SIMPLE_TOKEN = new InjectionToken('SIMPLE');

export const SimpleTokenProvider = {
  provide: SIMPLE_TOKEN,
  useClass: SimpleTokenImplementation
};
