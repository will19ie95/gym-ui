import { Injectable } from '@angular/core';
import { Exercise } from "../models/exercise.model";
import { EXCERCISES } from "../mocks/mock-exercises";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor() { }

  getExercises(): Observable<Exercise[]> {
    return of(EXCERCISES);
  }

  getExercisesByMuscle(category: String): Observable<Exercise[]> {

    // filter by muscle
    const exercises = EXCERCISES.filter((exercise) => {
      return exercise.category === category;
    });

    return of(exercises);
  }
}
