import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';

const routes: Routes = [
  { path: 'newRelease', component: NewReleasesComponent },
  { path: 'artist', component: ArtistDiscographyComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: 'newRelease',
    pathMatch: 'full',
  },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
