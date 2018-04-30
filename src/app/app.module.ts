import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpServiceService } from './services/http-service.service';
import { HttpConfigService } from './services/http-config.service';
import { HttpConfigComponent } from './config/http-config/http-config.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HttpServiceService, HttpConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
