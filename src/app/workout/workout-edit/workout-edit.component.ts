import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-workout-edit",
  templateUrl: "./workout-edit.component.html",
  styleUrls: ["./workout-edit.component.css"]
})
export class WorkoutEditComponent implements OnInit {
  @ViewChild("workoutForm") workoutForm: NgForm;

  weight: number = 12.1234;
  reps: number = 0;

  constructor() {}

  ngOnInit() {}
}
