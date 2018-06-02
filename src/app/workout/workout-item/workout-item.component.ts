import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-workout-item",
  templateUrl: "./workout-item.component.html",
  styleUrls: ["./workout-item.component.css"]
})
export class WorkoutItemComponent implements OnInit {
  @Input() set: Number = 1;
  @Input() weight: Number = 15.0;
  @Input() reps: Number = 45;
  constructor() {}

  ngOnInit() {}
}
