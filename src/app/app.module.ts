import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule } from "@angular/forms";

// Angular Material
import { MaterialModule } from "./material.module";
import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";

import { AppRoutingModule } from "./app-routing.module";
import { MyTableComponent } from "./my-table/my-table.component";

import { KeysPipe } from "./keys.pipe";
import { FixedtopDirective } from "./exercises/fixedtop.directive";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ExerciseContentComponent } from "./exercises/exercise-content/exercise-content.component";
import { ExerciseCategoriesComponent } from "./exercises/exercise-categories/exercise-categories.component";
import { ExerciseCategoryComponent } from "./exercises/exercise-category/exercise-category.component";

// calendar
import { CalendarComponent } from "./calendar/calendar.component";
import { CalendarModule } from "angular-calendar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// workout
import { ExcercisesModule } from "./exercises/exercises.module";
import { WorkoutModule } from "./workout/workout.module";

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyTableComponent,
    KeysPipe,
    FixedtopDirective,
    ToolbarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    WorkoutModule,
    ExcercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
