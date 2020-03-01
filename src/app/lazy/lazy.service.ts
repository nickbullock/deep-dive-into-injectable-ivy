import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyService {
  call() {
    console.log('>>>> LazyService call');
  }
}
