import { Component, OnInit } from '@angular/core';
import { todo } from './../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: todo[];
  searchTodo: string;
  isChecked: boolean;
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Film introduction video',
        completed: false,
        date: new Date(),
      },
      {
        content: 'Pay bills',
        completed: false,
        date: new Date(),
      },
      {
        content: 'Walk with dog',
        completed: false,
        date: new Date(),
      },
    ];
  }
  toggleDone(index: number) {
    this.todos.map((v, i) => {
      if (i == index) v.completed = !v.completed;
      return v;
    });
  }
  deleteTodo(index: number) {
    this.todos = this.todos.filter((v, i) => i !== index);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      date: new Date(),
    });
    this.inputTodo = '';
  }

  searchTodoEmit(event: any) {
    this.searchTodo = event;
  }
  checkedEmit(event: any) {
    this.isChecked = event;
  }
}
