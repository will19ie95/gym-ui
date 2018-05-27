import { Component, OnInit } from '@angular/core';
import { ExcercisesService } from "../services/excercises.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-excercise-category',
  templateUrl: './excercise-category.component.html',
  styleUrls: ['./excercise-category.component.css']
})
export class ExcerciseCategoryComponent implements OnInit {

  constructor(
    private excercisesService: ExcercisesService,
    private route: ActivatedRoute
  ) { }

  muscle: String;
  excercises;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.muscle = params['muscle'];
      this.getExcercises();
    });
  }

  getExcercises() {
    this.excercisesService.getExcercisesByMuscle(this.muscle).subscribe(data => {
      console.log("excercise category ", data);
      this.excercises = data;
    });
  }

}
