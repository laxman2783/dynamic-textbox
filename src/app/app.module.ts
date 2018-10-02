import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {

    path: 'student',
    component: StudentComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
 
    StudentComponent
  ],
  imports: [
    BrowserModule,
       FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
