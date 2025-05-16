import { Component } from '@angular/core';
import { TodoList1Component } from 'src/app/todo-list-1/todo-list-1.component';
import { TodoList2Component } from 'src/app/todo-list-2/todo-list-2.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone:true,
  imports:[TodoList1Component,TodoList2Component]
})
export class TodoListComponent {

}
