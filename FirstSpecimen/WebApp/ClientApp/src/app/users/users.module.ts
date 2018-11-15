import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewUserPostsComponent } from './view-user-posts/view-user-posts.component';
import { ViewUserAlbumsComponent } from './view-user-albums/view-user-albums.component';

@NgModule({
  declarations: [UserListComponent, ViewUserComponent, ViewUserPostsComponent, ViewUserAlbumsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    UserListComponent,
    ViewUserComponent
  ]
})
export class UsersModule { }
