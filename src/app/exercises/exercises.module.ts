import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExercisesComponent } from "./exercises.component";
import { ExerciseContentComponent } from "./exercise-content/exercise-content.component";
import { ExerciseCategoryComponent } from "./exercise-category/exercise-category.component";
import { ExerciseCategoriesComponent } from "./exercise-categories/exercise-categories.component";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    ExercisesComponent,
    ExerciseContentComponent,
    ExerciseCategoryComponent,
    ExerciseCategoriesComponent
  ],
  exports: [
    ExercisesComponent,
    ExerciseContentComponent,
    ExerciseCategoryComponent,
    ExerciseCategoriesComponent
  ]
})
export class ExcercisesModule {}
