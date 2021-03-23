import { MusicDataService } from './../music-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favourites: Array<any>;

  constructor(private musicDataService: MusicDataService) {}

  ngOnInit(): void {
    this.musicDataService.getFavourites().subscribe((data) => {
      console.log(data);
      this.favourites = data.tracks;
      console.log(this.favourites);
    });
  }

  removeFromFavourites(id): void {
    this.musicDataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
  }
}
