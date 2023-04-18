import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName = "";
  userAge = "";
  @Output() registerEvent = new EventEmitter();

  Add(){
      let newStudent = {name:this.userName, age:this.userAge};

      if(+this.userAge>=20 && +this.userAge<=40 && this.userName.length>=3){
        this.registerEvent.emit(newStudent);
        this.userName='';
        this.userAge='';
      }
  }
}
