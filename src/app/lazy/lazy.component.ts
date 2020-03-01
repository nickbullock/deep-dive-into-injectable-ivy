import { Component } from '@angular/core';
import { LazyService } from 'src/app/lazy/lazy.service';
import {ProvidedInModuleService} from 'src/app/provided-in-module/provided-in-module.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  constructor(private lazyService: LazyService, private providedInModuleService: ProvidedInModuleService) {
    lazyService.call();
    providedInModuleService.call();
  }
}
