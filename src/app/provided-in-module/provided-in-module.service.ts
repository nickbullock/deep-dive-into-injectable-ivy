import { Injectable } from '@angular/core';
import {ProvidedInModuleModule} from 'src/app/provided-in-module/provided-in-module.module';

@Injectable({
  providedIn: ProvidedInModuleModule
})
export class ProvidedInModuleService {
  call() {
    console.log('>>>> ProvidedInModuleService call');
  }
}
