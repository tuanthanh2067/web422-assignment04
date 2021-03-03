/*********************************************************************************
 *  WEB422 – Assignment 04
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: Tuan Thanh Tan Student ID: 102183191 Date: February 26, 2021
 *
 ********************************************************************************/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations],
})
export class AppComponent {
  title = 'web422-a4';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
