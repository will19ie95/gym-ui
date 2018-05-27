import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { ExcercisesService } from "../services/excercises.service";
import { MusclesService } from "../services/muscles.service";
import { ActivatedRoute, Params, UrlSegment, Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-excercises',
  templateUrl: './excercises.component.html',
  styleUrls: ['./excercises.component.css']
})
export class ExcercisesComponent implements OnInit, OnDestroy {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private excerciseService: ExcercisesService,
    private musclesService: MusclesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  muscles;
  excercises;
  page_title;
  routeSubscription;

  ngOnInit() {

    // set initial title to Excercise, decode percent encoding
    this.page_title = decodeURIComponent(this.router.routerState.snapshot.url.split("/").pop());

    // change page_title based on current route
    this.routeSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // set page_title
        this.page_title = event.url.split("/").pop();
        // decode URI percent encoding
        this.page_title = decodeURIComponent(this.page_title);
        // console.log("event, ", event.url.split("/").pop());
      }
    });
    this.getMuscles();
    this.getExcercises();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getExcercises() {
    this.excerciseService.getExcercises().subscribe(data => {
      // console.log("excercise", data);
      this.excercises = data;
    });
  }

  getMuscles() {
    this.musclesService.getMuscles().subscribe(data => {
      // console.log("muscles", data);
      this.muscles = data;
    });
  }


}
