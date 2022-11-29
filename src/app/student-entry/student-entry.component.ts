import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
name=""
rollNo=""
admissionNo=""
phoneNo=""
collegeName=""
parentName=""
parentMobno=""
userName=""
password=""


  readValues=()=>
  {
  
  let data:any={"name":this.name,"rollNo":this.rollNo,"admissionNo":this.admissionNo,"phoneNo":this.phoneNo,"collegeName":this.collegeName,"parentName":this.parentName,"parentMobno":this.parentMobno,"userName":this.userName,"password":this.password}
  console.log(data)
  }
}
