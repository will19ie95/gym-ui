import { Injectable } from '@angular/core';
import { Excercise } from "../excercise.model";
import { EXCERCISES } from "../mock-excercises";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcercisesService {

  constructor() { }

  getExcercises(): Observable<Excercise[]> {
    return of(EXCERCISES);
  }
}
