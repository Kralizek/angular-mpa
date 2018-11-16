import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-user-albums',
  templateUrl: './view-user-albums.component.html',
  styles: []
})
export class ViewUserAlbumsComponent implements OnInit {

  albums : Album[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let userId = this.route.snapshot.params.id;
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
    
    

    this.http.get<Album[]>(url).subscribe(items => this.albums = items);  
  }

}

export interface Album{
  id: number;
  title: string;
  userId: number;
}