import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


import { Post } from '../../interfaces/apiOne/post';
import { User } from '../../interfaces/apiOne/user';
import { HttpCrudService } from '../../services/http-crud.service';

const DummyPost = {
  userId: 1,
  id: 10,
  title: 'mi omo',
  body: 'Ask my neighbor for details'
};


@Component({
  selector: 'app-httpcrud',
  templateUrl: './httpcrud.component.html',
  styleUrls: ['./httpcrud.component.css']
})

export class HttpcrudComponent implements OnInit {
  post: Post;
  constructor(private configService: HttpCrudService) { }

  ngOnInit() {
     }

showConfig() {
    this.configService.getConfig()
      .subscribe(
        data => {
          this.post = { ...data };
          console.log(this.post);
        }, // success path
        error => {
            console.log(error);
        }   // error path
    );
  }

}
