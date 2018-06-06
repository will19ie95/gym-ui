import { Component, OnInit } from "@angular/core";
// import { WORKOUTS } from "./workouts.mock";
import { WorkoutSetsService } from "./workout-sets.service";
import { WorkoutSet } from "./workout-item/workout-set.model";
import { Workout } from "./workout.model";

@Component({
  selector: "app-workout",
  templateUrl: "./workout.component.html",
  styleUrls: ["./workout.component.css"]
})
export class WorkoutComponent implements OnInit {
  // TODO fix the naming, workout/sets confusing
  // workout = WORKOUTS[0].sets;
  workout: Workout;
  workoutName: String;
  workoutSets: WorkoutSet[];

  constructor(private workoutSetsService: WorkoutSetsService) {}

  ngOnInit() {
    this.workout = this.workoutSetsService.getWorkout();
    this.workoutName = this.workout.name;
    this.workoutSets = this.workout.sets;
    // console.log("fetched workoutsets: ", this.workoutSets);
  }

  onSetEdit(index: number) {
    this.workoutSetsService.startedEditing.next(index);
  }
}
