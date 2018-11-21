import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'view-user-posts',
  templateUrl: './view-user-posts.component.html',
  styles: []
})
export class ViewUserPostsComponent implements OnInit {

  posts : Post[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let userId = viewModel.User.Id;
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

    this.http.get<Post[]>(url).subscribe(items => this.posts = items);  
  }
}

export interface Post{
  userId: number,
  id: number,
  title: string,
  body: string
}

declare var viewModel : any;