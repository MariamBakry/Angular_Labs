import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
 //Students:{name:string, age:string}[] = [];
 @Input() StudentsData:any;
}
