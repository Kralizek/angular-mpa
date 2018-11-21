import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'view-user-albums',
  templateUrl: './view-user-albums.component.html',
  styles: []
})
export class ViewUserAlbumsComponent implements OnInit {

  albums : Album[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let userId = viewModel.User.Id;
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

    this.http.get<Album[]>(url).subscribe(items => this.albums = items);  
  }

}

export interface Album {
  id: number;
  title: string;
  userId: number;
}

declare var viewModel : any;