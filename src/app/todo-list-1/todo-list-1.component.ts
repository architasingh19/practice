import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo{
  id: number,
  text : string,
  completed: boolean

}
@Component({
  selector: 'app-todo-list-1',
  templateUrl: './todo-list-1.component.html',
  styleUrls: ['./todo-list-1.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class TodoList1Component {
  todos: Todo[] = [];
  newTodoText: string = '';
  nextId: number = 1;

  addTodo(): void {
    const trimmedText = this.newTodoText.trim();
    if (trimmedText) {
      this.todos.push({ id: this.nextId++, text: trimmedText, completed: false });
      this.newTodoText = '';
    }
  }

 
  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

}
