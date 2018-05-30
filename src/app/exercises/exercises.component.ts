import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { ExercisesService } from "../services/exercises.service";
import { MusclesService } from "../services/muscles.service";
import { ActivatedRoute, Params, UrlSegment, Router, Event, NavigationStart } from '@angular/router';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private exerciseService: ExercisesService,
    private musclesService: MusclesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isMobile: Boolean;
  muscles;
  exercises;
  page_title;
  routeSubscription;
  handsetSubscription;
  @ViewChild("sidenav") sidenav: MatSidenav;

  ngOnInit() {

    // mobile check
    this.handsetSubscription = this.isHandset.subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    // set initial title to Exercise, decode percent encoding
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
    this.getExercises();
  }

  ngOnDestroy(): void {
    this.handsetSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  getExercises() {
    this.exerciseService.getExercises().subscribe(data => {
      // console.log("exercise", data);
      this.exercises = data;
    });
  }

  getMuscles() {
    this.musclesService.getMuscles().subscribe(data => {
      // console.log("muscles", data);
      this.muscles = data;
    });
  }

  sideNavMobileToggle() {
    // close sidenav only if mobile
    if (this.isMobile) {
      this.sidenav.close();
    }
  }

}
