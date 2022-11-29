import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  admissionNo=""
  readValues=()=>
  {
  
  let data:any={"admissionNo":this.admissionNo}
  console.log(data)
  }
}
