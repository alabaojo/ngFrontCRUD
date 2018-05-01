import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


// import { Config } from '../interfaces/config';

const url1 = 'https://jsonplaceholder.typicode.com/users';
@Injectable()
export class HttpCrudService {

  configUrl = url1;
  constructor(private http: HttpClient) { }
  getConfig() {
    // now returns an Observable of Config
    return this.http.get<any>(this.configUrl);
  }
  getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl, { observe: 'response' });
  }
}
