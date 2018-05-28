import { Component, OnInit } from '@angular/core';
import { MusclesService } from "../../services/muscles.service";

@Component({
  selector: 'app-excercise-categories',
  templateUrl: './excercise-categories.component.html',
  styleUrls: ['./excercise-categories.component.css']
})
export class ExcerciseCategoriesComponent implements OnInit {

  constructor(private musclesService: MusclesService) { }

  muscles;

  ngOnInit() {
    this.getMuscles();
  }

  // TODO get this from parent instead of from service?
  getMuscles() {
    this.musclesService.getMuscles().subscribe(data => {
      console.log("muscles categories", data);
      this.muscles = data;
    });
  }

}
