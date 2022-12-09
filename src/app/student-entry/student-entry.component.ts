import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
name=""
rollNo=""
admissionNo=""
college=""
constructor(private api:ApiService){}

  readValues=()=>
  {
  
  let data:any={"name":this.name,"rollno":this.rollNo,"admnno":this.admissionNo,"college":this.college}
  console.log(data)
  this.api.addStudent(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("Student added successfully")
        this.admissionNo=""
        this.college=""
        this.name=""
        this.rollNo=""
      } else {
        alert("something went wrong")
      }
    }
  )
  }
}
