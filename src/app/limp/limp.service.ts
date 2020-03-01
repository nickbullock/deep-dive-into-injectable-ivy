import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LimpService {
  call() {
    console.log('>>>> LimpService call');
  }
}
