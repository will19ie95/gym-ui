import { Component, OnInit, Input } from "@angular/core";
import { WorkoutSet } from "../workout-item/workout-set.model";

@Component({
  selector: "app-workout-card",
  templateUrl: "./workout-card.component.html",
  styleUrls: ["./workout-card.component.css"]
})
export class WorkoutCardComponent implements OnInit {
  @Input() name: String;
  @Input()
  workout: WorkoutSet[] = [
    {
      weight: 15.0,
      reps: 10
    },
    {
      weight: 30.0,
      reps: 5
    },
    {
      weight: 45.0,
      reps: 4
    }
  ];

  constructor() {}

  ngOnInit() {}
}
