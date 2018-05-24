import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { ExcercisesService } from "../services/excercises.service";
import { MusclesService } from "../services/muscles.service";

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private excerciseService: ExcercisesService,
    private musclesService: MusclesService
  ) { }

  // muscle_list = require('../mock_data/excercises_list.json');
  muscles;
  excercises;
  page_title = "Excercises";

  ngOnInit() {
    this.getMuscles();
    this.getExcercises();
  }

  getExcercises() {
    this.excerciseService.getExcercises().subscribe(data => {
      console.log("excercise", data);
      this.excercises = data;
    });
  }

  getMuscles() {
    this.musclesService.getMuscles().subscribe(data => {
      console.log("muscles", data);
      this.muscles = data;
    });
  }


}
