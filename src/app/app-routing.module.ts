import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { MyTableComponent } from "./my-table/my-table.component";
import { ExcercisesComponent } from "./excercises/excercises.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "excercises",
    component: ExcercisesComponent
  },
  {
    path: "dashboard",
    component: MyDashboardComponent
  },
  {
    path: "table",
    component: MyTableComponent
  },

  // {
  //   path: "home",
  //   component: MyNavComponent,
  //   children: [
  //     {
  //       path: "excercises",
  //       component: ExcercisesComponent
  //     },
  //     {
  //       path: "dashboard",
  //       component: MyDashboardComponent
  //     },
  //     {
  //       path: "table",
  //       component: MyTableComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
