import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentdeleteComponent } from './studentdelete/studentdelete.component';
import { Route, RouterModule, Routes } from '@angular/router';

 const myRoute:Routes=[
  {
    path:"",
    component :StudentEntryComponent
  },
  {
    path:"search",
    component:StudentSearchComponent
  },
  {
    path:"delete",
    component:StudentdeleteComponent
  },
  {
    path:"viewallstudents",
    component:ViewAllStudentsComponent
  }
 ]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewAllStudentsComponent,
    StudentSearchComponent,
    StudentdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
