import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../../app/interfaces/apiOne/post';
import { User } from '../../app/interfaces/apiOne/user';

// import { Config } from '../interfaces/config';
const baseUrl = 'https://jsonplaceholder.typicode.com';
@Injectable()
export class HttpCrudService {
  constructor(private http: HttpClient) { }

getItem<T>(uri: string) {
  const url = baseUrl + uri;
    // now returns an Observable of Config
    return this.http.get<T>(url);
  }

getItemResponse<T>(uri: string): Observable<HttpResponse<T>> {
  const url = baseUrl + uri;
    return this.http.get<T>(
      url, {observe: 'response'});
  }
  postItem<T>(uri: string, inData: any) {
    const url = baseUrl + uri;
          this.http.post(url, inData).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
  putItem<T>(uri: string, inData: any) {
    const url = baseUrl + uri;
    this.http
      .put(url, inData, {
        params: new HttpParams().set('id', '56784'),
        headers: new HttpHeaders().set('Authorization', 'some-token')
      })
      .subscribe();
  }
  patchItem<T>(uri: string, inData: any) {
    const url = baseUrl + uri;
    this.http
      .put(url, inData, {
        params: new HttpParams().set('id', '56784'),
        headers: new HttpHeaders().set('Authorization', 'some-token')
      })
      .subscribe();
  }
}
