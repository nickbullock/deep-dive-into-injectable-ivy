import { BrowserModule } from '@angular/platform-browser';
import {Injectable, InjectionToken, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProvidedInModuleModule} from 'src/app/provided-in-module/provided-in-module.module';
import {SimpleTokenProvider} from 'src/app/token/simple-token';

@Injectable({
  providedIn: 'root',
  useFactory: () => new SimpleService()
})
class SimpleService {}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProvidedInModuleModule
  ],
  providers: [SimpleService, SimpleTokenProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
