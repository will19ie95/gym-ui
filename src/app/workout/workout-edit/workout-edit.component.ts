import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WorkoutSetsService } from "../workout-sets.service";
import { Workout } from "../workout.model";
import { WorkoutSet } from "../workout-item/workout-set.model";
import { Subject } from "rxjs";

@Component({
  selector: "app-workout-edit",
  templateUrl: "./workout-edit.component.html",
  styleUrls: ["./workout-edit.component.css"]
})
export class WorkoutEditComponent implements OnInit, OnDestroy {
  @ViewChild("workoutForm") workoutForm: NgForm;

  // edit
  weight: number;
  reps: number;
  // workout
  subscription;
  workout: Workout;
  editMode: boolean = false;
  editedSet: WorkoutSet;
  editedSetIndex: number;

  constructor(private workoutSetsService: WorkoutSetsService) {}

  ngOnInit() {
    this.workout = this.workoutSetsService.getWorkout();
    this.subscription = this.workoutSetsService.startedEditing.subscribe(
      (index: number) => {
        console.log("Editing Set Index: ", index);
        this.editedSetIndex = index;
        this.editMode = true;
        this.editedSet = this.workoutSetsService.getWorkoutSet(index);
        this.weight = this.editedSet.weight;
        this.reps = this.editedSet.reps;
        // this.workoutForm.setValue({
        //   weight: this.editedSet.weight,
        //   reps: this.editedSet.reps
        // });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // workout info/edit

  onClear() {
    this.editMode = false;
    // reset form
    this.weight = null;
    this.reps = null;
  }

  onDelete() {
    this.workoutSetsService.deleteWorkoutSet(this.editedSetIndex);
    this.onClear();
  }

  onSubmit(form: NgForm) {
    console.log("form submitted: ", form);
    const newWorkoutSet = new WorkoutSet(this.weight, this.reps);

    if (this.editMode) {
      this.workoutSetsService.updateWorkoutSet(
        this.editedSetIndex,
        newWorkoutSet
      );
    } else {
      this.workoutSetsService.addWorkoutSet(newWorkoutSet);
    }
    this.editMode = false;
  }

  // Pluse Minus Buttons
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
    if (this.weight - 5 > 0) {
      this.weight -= 5;
    } else {
      this.weight = 0;
    }
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
    if (this.reps - 1 > 0) {
      this.reps -= 1;
    } else {
      this.reps = 0;
    }
  }
}
