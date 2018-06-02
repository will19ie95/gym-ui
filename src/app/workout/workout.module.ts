import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkoutComponent } from "./workout.component";
import { WorkoutEditComponent } from "./workout-edit/workout-edit.component";
import { WorkoutItemComponent } from "./workout-item/workout-item.component";
import { WorkoutItemListComponent } from "./workout-item-list/workout-item-list.component";
import { WorkoutCardListComponent } from "./workout-card-list/workout-card-list.component";
import { WorkoutCardComponent } from "./workout-card/workout-card.component";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule],
  declarations: [
    WorkoutComponent,
    WorkoutEditComponent,
    WorkoutItemComponent,
    WorkoutItemListComponent,
    WorkoutCardListComponent,
    WorkoutCardComponent
  ],
  exports: [
    WorkoutComponent,
    WorkoutEditComponent,
    WorkoutItemComponent,
    WorkoutItemListComponent,
    WorkoutCardListComponent,
    WorkoutCardComponent
  ]
})
export class WorkoutModule {}
