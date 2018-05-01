import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class DownloaderService {

 constructor(private http: HttpClient) { }
getTextFile(filename: string) {
  // The Observable returned by get() is of type Observable<string>
  // because a text response was specified.
  // There's no need to pass a <string> type parameter to get().
  return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(filename, data),
        error => console.error('Ooops', error.message) // this.logError(filename, error)
      )
    );
}
}
