import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  newTaskDescription: string = '';

  tasks: {description: string, isCompleted: boolean}[] = [];


constructor( private todoService: TodoService) {

}

ngOnInit(): void{
  this.tasks = this.todoService.getTasks();
}

 public addTask():void {
  if(this.newTaskDescription. trim() === ''){

  }

 }
}
