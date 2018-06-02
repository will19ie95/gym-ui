import { Component, OnInit } from "@angular/core";
import { WorkoutItem } from "../workout-item/workout-item.model";

@Component({
  selector: "app-workout-item-list",
  templateUrl: "./workout-item-list.component.html",
  styleUrls: ["./workout-item-list.component.css"]
})
export class WorkoutItemListComponent implements OnInit {
  constructor() {}

  workouts: WorkoutItem[] = [
    {
      set: 1,
      weight: 15.0,
      reps: 10
    },
    {
      set: 2,
      weight: 30.0,
      reps: 5
    },
    {
      set: 3,
      weight: 45.0,
      reps: 4
    }
  ];

  ngOnInit() {}
}
