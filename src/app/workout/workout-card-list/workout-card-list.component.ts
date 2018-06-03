import { Component, OnInit, Input } from "@angular/core";
import { WORKOUTS } from "../workouts.mock";

@Component({
  selector: "app-workout-card-list",
  templateUrl: "./workout-card-list.component.html",
  styleUrls: ["./workout-card-list.component.css"]
})
export class WorkoutCardListComponent implements OnInit {
  @Input() workouts = WORKOUTS;

  constructor() {}

  ngOnInit() {}
}
