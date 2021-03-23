import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponent,
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
  },
  {
    path: 'newRelease',
    component: NewReleasesComponent,
  },
  {
    path: 'search',
    component: SearchResultComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
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
