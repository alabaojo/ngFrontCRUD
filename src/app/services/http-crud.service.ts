import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../../app/interfaces/apiOne/post';
import { User } from '../../app/interfaces/apiOne/user';

// import { Config } from '../interfaces/config';
const url = 'https://jsonplaceholder.typicode.com/posts';
@Injectable()
export class HttpCrudService {
  constructor(private http: HttpClient) { }

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<any>(url);
  }
  filterItems(category: string, year: string): Observable<any[]> {
    const httpHeaders = new HttpHeaders()
                      .set('Accept', 'application/json');
          return this.http.get<any[]>(url + '?category=' + category + '&year=' + year, {
              headers: httpHeaders,
              responseType: 'json'
      });
    }

getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      url, {observe: 'response'});
  }
  postData(inData: any) {
          this.http.post(url, inData).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
}
