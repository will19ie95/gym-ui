import { Component, OnInit } from "@angular/core";
// import { WORKOUTS } from "./workouts.mock";
import { WorkoutSetsService } from "./workout-sets.service";
import { WorkoutSet } from "./workout-item/workout-set.model";

@Component({
  selector: "app-workout",
  templateUrl: "./workout.component.html",
  styleUrls: ["./workout.component.css"]
})
export class WorkoutComponent implements OnInit {
  // TODO fix the naming, workout/sets confusing
  // workout = WORKOUTS[0].sets;
  workoutSets: WorkoutSet[];

  constructor(private workoutSetsService: WorkoutSetsService) {}

  ngOnInit() {
    this.workoutSets = this.workoutSetsService.getWorkoutSets();
    console.log("fetched workoutsets: ", this.workoutSets);
  }

  onSetEdit(index: number) {
    console.log("Editing Set Index: ", index);
  }
}
