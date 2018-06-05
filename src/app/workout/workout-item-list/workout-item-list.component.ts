import { Component, OnInit, Input } from "@angular/core";
import { WorkoutSet } from "../workout-item/workout-set.model";

@Component({
  selector: "app-workout-item-list",
  templateUrl: "./workout-item-list.component.html",
  styleUrls: ["./workout-item-list.component.css"]
})
export class WorkoutItemListComponent implements OnInit {
  constructor() {}

  @Input() workout: WorkoutSet[];

  ngOnInit() {}
}
