/*********************************************************************************
 *  WEB422 – Assignment 06
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: Tuan Thanh Tan Student ID: 102183191 Date: April 04, 2021
 *
 ********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web422-a4';
  searchString: string;

  constructor(private router: Router) {}

  handleSearch(): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
  }

  ngOnInit(): void {
    this.searchString = '';
  }
}
