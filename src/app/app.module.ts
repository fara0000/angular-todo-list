import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TodoComponent } from './component/todo/todo.component';
import { TodoHeaderComponent } from './component/todo/components/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
