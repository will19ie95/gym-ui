import { WorkoutSet } from "./workout-item/workout-set.model";

export class Workout {
  constructor(public name: String, public sets?: WorkoutSet[]) {}
}
