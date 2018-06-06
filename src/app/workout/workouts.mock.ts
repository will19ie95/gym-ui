import { Workout } from "./workout.model";

export const WORKOUTS: Workout[] = [
  {
    name: "Pull Up",
    sets: [
      { weight: 15.0, reps: 10 },
      { weight: 30.0, reps: 5 },
      { weight: 45.0, reps: 4 }
    ]
  },
  {
    name: "Clean and Jerk",
    sets: [
      { weight: 45.0, reps: 10 },
      { weight: 70.0, reps: 8 },
      { weight: 90.0, reps: 3 }
    ]
  },
  {
    name: "Barbell Bench Press",
    sets: [
      { weight: 45.0, reps: 15 },
      { weight: 180.0, reps: 6 },
      { weight: 200.0, reps: 4 }
    ]
  }
];
