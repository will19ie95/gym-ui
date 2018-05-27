import { Injectable } from '@angular/core';
import { Excercise } from "../models/excercise.model";
import { EXCERCISES } from "../mocks/mock-excercises";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcercisesService {

  constructor() { }

  getExcercises(): Observable<Excercise[]> {
    return of(EXCERCISES);
  }

  getExcercisesByMuscle(category: String): Observable<Excercise[]> {

    // filter by muscle
    const excercises = EXCERCISES.filter((excercise) => {
      return excercise.category === category;
    });

    return of(excercises);
  }
}
