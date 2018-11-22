import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataService } from 'src/app/page-data.service';

@Component({
  selector: 'view-user-posts',
  templateUrl: './view-user-posts.component.html',
  styles: []
})
export class ViewUserPostsComponent implements OnInit {

  posts : Post[];

  constructor(private http: HttpClient, private pageData: PageDataService) { }

  ngOnInit() {
    let userId = this.pageData.getCurrent().routeValues.userId;
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

declare var pageData : any;