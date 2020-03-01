import {Component, ɵrenderComponent as renderComponent, Injector, Inject} from '@angular/core';
import { ApplicationService } from 'src/app/application.service';
import {Router} from '@angular/router';
import {CUSTOM_TOKEN, CustomToken} from 'src/app/token-in-root/custom-token';
import {ComponentService} from 'src/app/component/component.service';
import {SIMPLE_TOKEN, SimpleTokenImplementation} from 'src/app/token/simple-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ComponentService
  ]
})
export class AppComponent {
  title = 'deep-dive-into-provided-in';
  limp;

  constructor(
    private appService: ApplicationService,
    @Inject(CUSTOM_TOKEN) private customToken: CustomToken,
    private router: Router,
    private componentService: ComponentService,
    @Inject(SIMPLE_TOKEN) private simpleToken: SimpleTokenImplementation
  ) {
    customToken.call();
    simpleToken.call();
    appService.call();
    componentService.call();
  }

  loadLimp() {
    if (!this.limp) {
      this.limp = import(`./limp/limp.component`)
        .then(({ LimpComponent }) => {
          renderComponent(LimpComponent);
        });
    }
  }

  goToLazy() {
    this.router.navigateByUrl('/lazy');
  }
}
