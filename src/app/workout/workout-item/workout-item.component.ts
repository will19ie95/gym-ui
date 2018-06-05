import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-workout-item",
  templateUrl: "./workout-item.component.html",
  styleUrls: ["./workout-item.component.css"]
})
export class WorkoutItemComponent implements OnInit {
  @Input() index: Number;
  @Input() weight: Number;
  @Input() reps: Number;

  constructor() {}

  ngOnInit() {}
}
