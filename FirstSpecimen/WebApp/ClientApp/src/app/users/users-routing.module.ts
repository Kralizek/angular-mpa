import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment, UrlMatchResult } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewUserPostsComponent } from './view-user-posts/view-user-posts.component';
import { ViewUserAlbumsComponent } from './view-user-albums/view-user-albums.component';
import { ViewUserSummaryComponent } from './view-user-summary/view-user-summary.component';

const routes: Routes = [
    {
        path: "Users", redirectTo: "users"
    },
    {
        path: "users",
        component: UserListComponent
    },
    {
        //path: "users/:id",
        matcher: ViewUserUrlMatcher,
        component: ViewUserComponent,
        children: [
            {
                path: "",
                component: ViewUserSummaryComponent
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

function ViewUserUrlMatcher (segments: UrlSegment[]) : UrlMatchResult {
    console.log(segments);
    return {
        consumed: segments.slice(0, 2),
        posParams: {
            "id": segments[1]
        }
    };
}