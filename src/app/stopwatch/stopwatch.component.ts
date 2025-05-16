import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  standalone : true,
  imports:[CommonModule]
})
export class StopwatchComponent {



  private intervalId : any = null;
  timer : number = 0;

  start(){
    if(!this.intervalId){
      this.intervalId = setInterval(() =>{
        this.timer++;
      },1000)
    }
  }
  
  stop(){
   if(this.intervalId){
    clearInterval(this.intervalId);
    this.intervalId = null
   }
  }

  reset(){
    this.stop()
    this.timer = 0;
  }

  ngOnDestroy(): void{
    this.stop();
  }
}
