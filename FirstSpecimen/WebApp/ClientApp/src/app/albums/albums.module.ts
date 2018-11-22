import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { ViewAlbumComponent } from './view-album/view-album.component';

@NgModule({
  declarations: [AlbumListComponent, ViewAlbumComponent],
  imports: [
    CommonModule
  ],
  exports: [AlbumListComponent, ViewAlbumComponent]
})
export class AlbumsModule { }
