import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList1Component } from './todo-list-1.component';

describe('TodoList1Component', () => {
  let component: TodoList1Component;
  let fixture: ComponentFixture<TodoList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoList1Component]
    });
    fixture = TestBed.createComponent(TodoList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
