import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(items => this.users = items);
  }

}

interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
}
