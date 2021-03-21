import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';

const routes: Routes = [
  {
    path: 'newRelease',
    component: NewReleasesComponent,
    data: { animationState: 'newRelease' },
  },
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponent,
    data: { animationState: 'artist' },
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
    data: { animationState: 'album' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animationState: 'about' },
  },
  {
    path: '',
    redirectTo: 'newRelease',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
