import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor() {
    console.log('>>> ApplicationService constructor!');
  }

  call() {
    console.log('>>> ApplicationService call!');
  }
}
