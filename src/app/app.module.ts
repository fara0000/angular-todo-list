import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TodoComponent } from './component/todo/todo.component';
import { TodoHeaderComponent } from './component/todo/components/todo-header/todo-header.component';
import { TodoBodyComponent } from './component/todo/components/todo-body/todo-body.component';
import { TodoFooterComponent } from './component/todo/components/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoBodyComponent,
    TodoFooterComponent
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
