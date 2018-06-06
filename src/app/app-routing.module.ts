import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";
import { MyTableComponent } from "./my-table/my-table.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ExerciseContentComponent } from "./exercises/exercise-content/exercise-content.component";
import { ExerciseCategoriesComponent } from "./exercises/exercise-categories/exercise-categories.component";
import { ExerciseCategoryComponent } from "./exercises/exercise-category/exercise-category.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { WorkoutComponent } from "./workout/workout.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/exercises",
    pathMatch: "full"
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "workout",
    component: WorkoutComponent
  },
  {
    path: "exercises",
    component: ExercisesComponent,
    children: [
      {
        path: "",
        redirectTo: "categories",
        pathMatch: "full"
      },
      {
        path: "categories",
        component: ExerciseCategoriesComponent
      },
      {
        path: "categories/:muscle",
        component: ExerciseCategoryComponent
      },
      {
        path: "categories/:muscle/:exercise",
        component: ExerciseContentComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: MyDashboardComponent
  },
  {
    path: "table",
    component: MyTableComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
