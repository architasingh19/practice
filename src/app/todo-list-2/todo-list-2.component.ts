import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Todo {
  id: number;
  text: string;
  time: number;
  isRunning: boolean;
  intervalId?: any;
}
@Component({
  selector: 'app-todo-list-2',
  templateUrl: './todo-list-2.component.html',
  styleUrls: ['./todo-list-2.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class TodoList2Component {
  todos : Todo[] =[];
  newTodoText : string ='';


  addTodo(){
    if(this.newTodoText.trim()){
      this.todos.push({
        id: Date.now(),
        text: this.newTodoText.trim(),
        time:0,
        isRunning: false,
      })
      this.newTodoText = '';
    }
  }

  toggleTimer(todo : Todo): void{
    if(todo.isRunning){
      clearInterval(todo.intervalId);
      todo.isRunning = false;
    }else{
      todo.isRunning = true;
      todo.intervalId = setInterval(() =>{
        todo.time++;
      },1000)
    }
  }

  resetTimer(todo:Todo):void{
    clearInterval(todo.intervalId);
    todo.time = 0;
    todo.isRunning = false;
  }

  deleteTodo(id:number):void{
    this.todos = this.todos.filter((todo) => todo.id !==id)
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

}
