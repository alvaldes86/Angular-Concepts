import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  task = {
    description: 'Task 1',
    isCompleted: false
  }


  onComplete() {

  };
  onDelete() {
  };
}
