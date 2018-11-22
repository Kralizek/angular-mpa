import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataService } from 'src/app/page-data.service';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styles: []
})
export class ViewUserComponent implements OnInit {

  userSummary: User;

  constructor(private http: HttpClient, private pageData: PageDataService) { }

  ngOnInit() {
    let userId = this.pageData.getCurrent().routeValues.userId;
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    this.http.get<User>(url).subscribe(item => this.userSummary = item);
  }

}

export interface User {
  id: number,
  name: string,
  email: string,
  username: string
}