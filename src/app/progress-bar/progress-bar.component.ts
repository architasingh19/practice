import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  imports:[CommonModule,FormsModule],
  standalone:true,
})
export class ProgressBarComponent {

  progress : number = 20;

  increment(){
    this.progress = Math.min(this.progress + 10 ,100);
  }
  decrement(){
    this.progress = Math.max(this.progress - 10 , 0)
  }

  getProgressColor(){
    if(this.progress < 40){
      return 'red';
    }
    else if(this.progress < 80){
      return 'orange';
    }
    else{
      return 'green'
    }
  }
}
