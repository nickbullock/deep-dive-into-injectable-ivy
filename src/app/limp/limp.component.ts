import {Component, Inject} from '@angular/core';
import {LimpService} from 'src/app/limp/limp.service';
import {CUSTOM_LIMP_TOKEN, CustomLimpToken} from 'src/app/limp/custom-limp-token';


@Component({
  selector: 'app-limp',
  templateUrl: './limp.component.html',
  styleUrls: ['./limp.component.scss']
})
export class LimpComponent {

  constructor(private limpService: LimpService, @Inject(CUSTOM_LIMP_TOKEN) private customLimpToken: CustomLimpToken) {
    customLimpToken.call();
    limpService.call();
  }

}
