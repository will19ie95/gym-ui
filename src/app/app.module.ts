import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material
import { MaterialModule } from "./material.module";
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { AppRoutingModule } from "./app-routing.module";
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { KeysPipe } from './keys.pipe';
import { FixedtopDirective } from './excercises/fixedtop.directive';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ExcerciseContentComponent } from './excercises/excercise-content/excercise-content.component';
import { ExcerciseCategoriesComponent } from './excercises/excercise-categories/excercise-categories.component';
import { ExcerciseCategoryComponent } from './excercises/excercise-category/excercise-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyTableComponent,
    KeysPipe,
    FixedtopDirective,
    ToolbarComponent,
    ExcercisesComponent,
    ExcerciseContentComponent,
    ExcerciseCategoriesComponent,
    ExcerciseCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
