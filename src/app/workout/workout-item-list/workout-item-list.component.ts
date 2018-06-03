import { Component, OnInit, Input } from "@angular/core";
import { WorkoutItem } from "../workout-item/workout-item.model";

@Component({
  selector: "app-workout-item-list",
  templateUrl: "./workout-item-list.component.html",
  styleUrls: ["./workout-item-list.component.css"]
})
export class WorkoutItemListComponent implements OnInit {
  constructor() {}

  @Input() workout: WorkoutItem[];

  ngOnInit() {}
}
