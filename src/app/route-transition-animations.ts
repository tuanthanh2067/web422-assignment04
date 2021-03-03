// import the required animation functions from the angular animations module
import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* => *', [
    query(
      ':leave',
      style({ position: 'absolute', left: 0, right: 0, opacity: 1 }),
      { optional: true }
    ),
    query(
      ':enter',
      style({ position: 'absolute', left: 0, right: 0, opacity: 0 }),
      { optional: true }
    ),
    query(':leave', animate('0.35s', style({ opacity: 0 })), {
      optional: true,
    }),
    query(':enter', animate('0.25s', style({ opacity: 1 })), {
      optional: true,
    }),
  ]),
]);
