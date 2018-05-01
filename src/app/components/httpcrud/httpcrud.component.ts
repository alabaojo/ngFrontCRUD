import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Post } from '../../interfaces/apiOne/post';
import { User } from '../../interfaces/apiOne/user';
import { HttpCrudService } from '../../services/http-crud.service';
import { stringify } from '@angular/compiler/src/util';


const inPost = { 'userId': 333, 'title': 'isdunuts', 'body': 'is Keine Ahnung' };
const uri = '/posts';

@Component({
  selector: 'app-httpcrud',
  templateUrl: './httpcrud.component.html',
  styleUrls: ['./httpcrud.component.css']
})

export class HttpcrudComponent implements OnInit {
post: Post;

  constructor(private configService: HttpCrudService) { }

  ngOnInit() {}

showPost() {
    this.configService.getItem(uri)
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
  // this.configService.postItem(uri, inPost);
  this.configService.postItem(uri, inPost);

}

}
