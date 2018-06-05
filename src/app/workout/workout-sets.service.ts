import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WorkoutSet } from "./workout-item/workout-set.model";
import { WORKOUTS } from "./workouts.mock";

@Injectable({
  providedIn: "root"
})
export class WorkoutSetsService {
  constructor() {}

  workoutSetsChanged = new Subject<WorkoutSet[]>();
  startedEditing = new Subject<number>();

  private workoutName: String = WORKOUTS[0].name;
  private workoutSets: WorkoutSet[] = WORKOUTS[0].sets;

  broadCastChange() {
    // inform subscribed of changes
    this.workoutSetsChanged.next(this.workoutSets.slice());
  }

  getWorkoutName() {
    return this.workoutName;
  }

  getWorkoutSets() {
    return this.workoutSets.slice();
  }

  getWorkoutSet(index: number) {
    return this.workoutSets[index];
  }

  addWorkoutSet(workoutSet: WorkoutSet) {
    this.workoutSets.push(workoutSet);
    this.broadCastChange();
  }

  updateWorkoutSet(index: number, newWorkoutSet: WorkoutSet) {
    this.workoutSets[index] = newWorkoutSet;
    this.broadCastChange();
  }

  addWorkoutSets(workoutSets: WorkoutSet[]) {
    // property spread notation
    this.workoutSets.push(...workoutSets);
    this.broadCastChange();
  }

  deleteWorkoutSet(index: number) {
    this.workoutSets.splice(index, 1);
    this.broadCastChange();
  }
}
