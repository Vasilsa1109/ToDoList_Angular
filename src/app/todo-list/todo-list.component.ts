// src/app/todo-list/todo-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'] 
})
export class TodoListComponent {
  tasks: string[] = [];
  task: string = '';

  addTask() {
    if (this.task) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
