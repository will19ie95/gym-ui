import { Component, OnInit } from '@angular/core';
import { ExercisesService } from "../../services/exercises.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-exercise-category',
  templateUrl: './exercise-category.component.html',
  styleUrls: ['./exercise-category.component.css']
})
export class ExerciseCategoryComponent implements OnInit {

  constructor(
    private exercisesService: ExercisesService,
    private route: ActivatedRoute
  ) { }

  category: String;
  exercises;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.category = params['muscle'];
      this.getExercises();
    });
  }

  getExercises() {
    this.exercisesService.getExercisesByMuscle(this.category).subscribe(data => {
      console.log("exercise category ", data);
      this.exercises = data;
    });
  }

}
