import { Injectable } from '@angular/core';
import { Muscles } from "../muscles.model";
import { MUSCLES } from "../mock-muscles";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusclesService {

  constructor() { }

  getMuscles(): Observable<Muscles[]> {
    return of(MUSCLES);
  }

}
