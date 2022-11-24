import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewAllStudentsComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
