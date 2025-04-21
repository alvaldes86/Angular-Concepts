import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//need to import this modules to use ngModel directive
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TypescriptConceptsComponent } from './typescript-concepts/typescript-concepts.component';
import { CounterComponent } from './counter/counter.component';
import { ConnectApiComponent } from './connect-api/connect-api.component';
import { ChildComponent } from './child/child.component';
import { CParentComponent } from './c-parent/c-parent.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    UserComponent,
    NavBarComponent,
    TypescriptConceptsComponent,
    CounterComponent,
    ConnectApiComponent,
    ChildComponent,
    CParentComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  //need to import this modules to use ngModel directive

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [UserComponent]
})
export class AppModule { }
