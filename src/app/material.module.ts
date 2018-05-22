import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatExpansionModule,
  MatDividerModule,
  MatTabsModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  imports: [
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
