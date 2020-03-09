import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { CourseTitleComponent } from './course-title/course-title.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseTitleComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CourseTitleComponent]
})
export class AppModule { }
