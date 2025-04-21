import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CParentComponent } from './c-parent/c-parent.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: CParentComponent },
  { path: 'counter', component: CounterComponent },
  {path: 'todo', component: TodoListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
