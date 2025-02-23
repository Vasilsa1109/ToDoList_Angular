import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
@Component({
  selector: 'app-root',
   imports: [RouterOutlet], //, TodoListComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  todos: Todo[] = [];
  newTodoTitle: string = '';
  title = 'todo-app';
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void{
    if(this.newTodoTitle.trim()){
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos();
    }
  }

  toggleTodo(id: number): void{
      this.todoService.toggleTodo(id);
      this.todos = this.todoService.getTodos();
    }
    deleteTodo(id: number): void{
      this.todoService.deleteTodo(id);
      this.todos = this.todoService.getTodos();
    }
}
