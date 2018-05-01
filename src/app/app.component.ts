import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ],
})
export class AppComponent {
  headers: any; // this should be reviewed ; error also
  error: any;
 // url : string = 'http://127.0.0.1.xip.io/locations';
    constructor() {}

}

