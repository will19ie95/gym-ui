import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) { }

  muscle_list = {
    Shoulders: [
      "Front Dumbbell Raise",
      "Lateral Dumbbell Raise",
      "Laterla Machine Raise",
      "Overhead Press",
      "Seated Dummbell Lateral Raise",
      "Seated Dummbell Press",
      "Standing Dumbbell Raise"
    ],
    Triceps: [
      "Rope Push Down",
      "Skull Crusher",
      "V-Bar Push Down",
      "One Hand Cable Push Down",
    ],
    Biceps: [
      "Barbell Curl",
      "Dumbbell Curl",
      "Hammer Curl",
    ],
    Chest: [],
    Back: [],
    Legs: [],
    Abs: [],
    Cardio: []
  };
}
