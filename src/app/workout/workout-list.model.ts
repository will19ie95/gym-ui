import { WorkoutSet } from "./workout-item/workout-set.model";

export class WorkoutList {
  constructor(public name: String, public sets?: WorkoutSet[]) {}
}
