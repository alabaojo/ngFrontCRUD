import { Component, OnInit } from '@angular/core';

import { HttpConfigService } from '../../services/http-config.service';
import { Config } from '../../interface/config';
@Component({
  selector: 'app-http-config',
  templateUrl: './http-config.component.html',
  styleUrls: ['./http-config.component.css']
})
export class HttpConfigComponent implements OnInit {
  config: Config;
  constructor(private configService: HttpConfigService) { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }
}
