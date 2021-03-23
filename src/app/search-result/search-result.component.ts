import { MusicDataService } from './../music-data.service';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;
  searchQuery: any;

  constructor(
    private route: ActivatedRoute,
    private musicDataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('q');
    this.musicDataService.searchArtists(this.searchQuery).subscribe((data) => {
      // images with array property with length greater than 0 will be assigned to results
      this.results = data.artists.items.filter(
        (item) => item.images.length > 0
      );
    });
  }
}
