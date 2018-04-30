import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Config } from '../app/interface/config';
import { HttpConfigService } from '../app/services/http-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpConfigService ],
})
export class AppComponent {
  title = 'app';
  config: Config;
  headers: any; // this should be reviewed ; error also
  error: any;
 // url : string = 'http://127.0.0.1.xip.io/locations';
    constructor(private configService: HttpConfigService) {}

    showConfigResponse() {
      this.configService.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
        .subscribe(resp => {
          // display its headers
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
               // access the body directly, which is typed as `Config`.
          this.config = { ... resp.body };
        });
    }
  showConfig() {
      this.configService.getConfig()
        .subscribe(
          data => {
            this.config = { ...data };
            console.log(this.config);
          }, // success path
          error => {
            this.error = error ;
            console.log(this.error);
          }   // error path
      );
    }
}

