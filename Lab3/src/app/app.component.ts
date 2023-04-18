import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab3';
  userName='';
  userAge='';
  //studentsData:{name:string, age:string}[] = [];
  studentsData:{}[] = [];

  getStudents(data:any){
    this.studentsData.push(data);
  }
}
