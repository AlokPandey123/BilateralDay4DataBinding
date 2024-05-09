import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase,NgStyle,NgClass,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';
  name="alok";
  col=2;
  classBinding='one';
  data:any[] = [];
  givenColor = "red";
  constructor(private students: StudentService){
    this.data = students.getDadta();
  }

  eventBinding : string ='';

  handlebutton(){
     this.eventBinding = "eventBinding";
  }

  inputData = "";

  handleInput(inputData:string){
    this.inputData = inputData;
  }
}
