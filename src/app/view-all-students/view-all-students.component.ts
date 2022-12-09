import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-students',
  templateUrl: './view-all-students.component.html',
  styleUrls: ['./view-all-students.component.css']
})
export class ViewAllStudentsComponent {
  constructor(private api:ApiService){
    api.fetchStudent().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
  }
  data:any=[]
}
