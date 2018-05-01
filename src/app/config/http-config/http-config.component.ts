import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { HttpConfigService } from '../../services/http-config.service';
import { DownloaderService } from '../../services/downloader.service';
import { Config } from '../../interfaces/config';
@Component({
  selector: 'app-http-config',
  templateUrl: './http-config.component.html',
  styleUrls: ['./http-config.component.css']
})
export class HttpConfigComponent implements OnInit {
  config: Config;
  constructor(private configService: HttpConfigService,
              private downloaderService: DownloaderService) { }

  ngOnInit() {
  }


  showConfigResponse() {
      this.configService.getConfigResponse()
        // resp is of type `HttpResponse<Config>`
        .subscribe(resp => {
          // display its headers
          const keys = resp.headers.keys();
          // ******this.headers = keys.map(key =>
           // ******** `${key}: ${resp.headers.get(key)}`);
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
          // *****  this.error = error ;
          // ****  console.log(this.error);
          }   // error path
      );
    }
}
