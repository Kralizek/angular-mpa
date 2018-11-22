import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataService } from 'src/app/page-data.service';

@Component({
  selector: 'view-user-albums',
  templateUrl: './view-user-albums.component.html',
  styles: []
})
export class ViewUserAlbumsComponent implements OnInit {

  albums : Album[];

  constructor(private http: HttpClient, private pageData : PageDataService) { }

  ngOnInit() {
    let userId = this.pageData.getCurrent().routeValues.userId;
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

    this.http.get<Album[]>(url).subscribe(items => this.albums = items);  
  }
}

export interface Album {
  id: number;
  title: string;
  userId: number;
}