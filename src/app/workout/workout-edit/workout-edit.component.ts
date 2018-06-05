import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-workout-edit",
  templateUrl: "./workout-edit.component.html",
  styleUrls: ["./workout-edit.component.css"]
})
export class WorkoutEditComponent implements OnInit {
  @ViewChild("workoutForm") workoutForm: NgForm;

  weight: number;
  reps: number;

  constructor() {}

  ngOnInit() {}

  onAddWeight() {
    if (!this.weight) {
      this.weight = 0;
    }
    this.weight += 5;
  }

  onMinusWeight() {
    if (!this.weight) {
      this.weight = 0;
    }
    this.weight -= 5;
  }

  onAddReps() {
    if (!this.reps) {
      this.reps = 0;
    }
    this.reps += 1;
  }

  onMinusReps() {
    if (!this.reps) {
      this.reps = 0;
    }
    this.reps -= 1;
  }
}
