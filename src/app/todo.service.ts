import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'task 1', completed: false },
    { id: 2, title: 'task 2', completed: true },
    { id: 3, title: 'task 3', completed: true },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}