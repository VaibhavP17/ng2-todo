import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MyTodoComponent } from './my-todo/my-todo.component';
import { MyTestComponent } from './components/my-test/my-test.component';


const appRoutes : Routes = [
  {
    path: 'test', component: MyTestComponent
  },
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
