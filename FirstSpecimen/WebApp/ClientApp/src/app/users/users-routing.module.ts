import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewUserPostsComponent } from './view-user-posts/view-user-posts.component';
import { ViewUserAlbumsComponent } from './view-user-albums/view-user-albums.component';

const routes: Routes = [
    {
        path: "Users", redirectTo: "users"
    },
    {
        path: "users",
        component: UserListComponent
    },
    {
        path: "users/:id",
        children:[
            {
                path: "",
                component: ViewUserComponent
            },
            {
                path: "posts",
                component: ViewUserPostsComponent
            },
            {
                path: "albums",
                component: ViewUserAlbumsComponent
            }
        ]
    }
];

@NgModule(
{
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class UsersRoutingModule { }