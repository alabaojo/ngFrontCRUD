import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Post } from '../../interfaces/apiOne/post';
import { User } from '../../interfaces/apiOne/user';
import { HttpCrudService } from '../../services/http-crud.service';
import { stringify } from '@angular/compiler/src/util';


const food = { 'id': 1, 'name': 'Donuts' };
const post = { 'id': 1, 'title': 'isdunuts', 'body': 'is Keine Ahnung' };

@Component({
  selector: 'app-httpcrud',
  templateUrl: './httpcrud.component.html',
  styleUrls: ['./httpcrud.component.css']
})

export class HttpcrudComponent implements OnInit {
  post: any;

  constructor(private configService: HttpCrudService) { }

  ngOnInit() {}

showConfig() {
    this.configService.getConfig()
      .subscribe(
        data => {
          this.post = { ...data};
          console.log(this.post);
        }, // success path
        error => {
            console.log(error);
        }   // error path
    );
  }
submitPost() {
  this.configService.postData(post);

}

}
