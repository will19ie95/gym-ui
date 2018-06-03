import { Component, OnInit, Input } from "@angular/core";
import { WorkoutItem } from "../workout-item/workout-item.model";

@Component({
  selector: "app-workout-card",
  templateUrl: "./workout-card.component.html",
  styleUrls: ["./workout-card.component.css"]
})
export class WorkoutCardComponent implements OnInit {
  @Input() title: String;
  @Input()
  workout: WorkoutItem[] = [
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

  constructor() {}

  ngOnInit() {}
}
