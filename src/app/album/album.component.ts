import { Component, OnInit, OnDestroy } from '@angular/core';
import * as data from '../data/SearchResultsAlbum.json';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  album: any;
  albumSubscription: Subscription;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private musicDataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.albumSubscription = this.route.params.subscribe((params: Params) => {
      this.musicDataService
        .getAlbumById(params.id)
        .subscribe((data) => (this.album = data));
    });
  }

  ngOnDestroy(): void {
    if (this.albumSubscription) {
      this.albumSubscription.unsubscribe();
    }
  }

  addToFavourites(trackId): void {
    if (this.musicDataService.addToFavourites(trackId)) {
      this.matSnackBar.open('Adding to Favourites...', 'Done', {
        duration: 1500,
      });
    }
  }
}
