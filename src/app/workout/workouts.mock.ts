import { WorkoutList } from "./workout-list.model";

export const WORKOUTS: WorkoutList[] = [
  {
    name: "Pull Up",
    sets: [
      { index: 1, weight: 15.0, reps: 10 },
      { index: 2, weight: 30.0, reps: 5 },
      { index: 3, weight: 45.0, reps: 4 }
    ]
  },
  {
    name: "Clean and Jerk",
    sets: [
      { index: 1, weight: 45.0, reps: 10 },
      { index: 2, weight: 70.0, reps: 8 },
      { index: 3, weight: 90.0, reps: 3 }
    ]
  },
  {
    name: "Barbell Bench Press",
    sets: [
      { index: 1, weight: 45.0, reps: 15 },
      { index: 2, weight: 180.0, reps: 6 },
      { index: 3, weight: 200.0, reps: 4 }
    ]
  }
];
