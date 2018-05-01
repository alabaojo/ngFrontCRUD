import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpCrudService } from './services/http-crud.service';
import { HttpcrudComponent } from './components/httpcrud/httpcrud.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpcrudComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ HttpCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
