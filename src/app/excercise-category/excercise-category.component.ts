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

  category: String;
  excercises;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.category = params['muscle'];
      this.getExcercises();
    });
  }

  getExcercises() {
    this.excercisesService.getExcercisesByMuscle(this.category).subscribe(data => {
      console.log("excercise category ", data);
      this.excercises = data;
    });
  }

}
