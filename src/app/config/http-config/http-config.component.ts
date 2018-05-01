import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { HttpConfigService } from '../../services/http-config.service';
import { DownloaderService } from '../../services/downloader.service';
import { Config } from '../../interface/config';
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

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile'],
      });
      console.log('mode mode mode');
  }
  showConfigNJSON() {
    this.downloaderService.getTextFile('textfile')
      .subscribe(data => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }
}
