import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


import { Config } from '../interfaces/config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpConfigService {
  // configUrl = 'assets/httpConfig.json';
  // configUrl = 'http://127.0.0.1.xip.io/locations';
  // configUrl = 'http://127.0.0.1:8000/locations/';
  url1 = 'https://jsonplaceholder.typicode.com/users';

  configUrl = this.url1;
  config: Config;
constructor(private http: HttpClient) { }

getConfig() {
  // now returns an Observable of Config
  return this.http.get<Config>(this.configUrl, httpOptions);
}
getConfigResponse(): Observable<HttpResponse<Config>> {
  return this.http.get<Config>(
    this.configUrl, { observe: 'response' });
}
}
