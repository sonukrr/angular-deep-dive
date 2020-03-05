import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, InjectionToken, Inject, Optional} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { CONFIG_TOKEN, APP_CONFIG, AppConfig } from './config';

// export function coursesServiceProvider(http: HttpClient):CoursesService{
// return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   { provide: COURSES_SERVICE, 
  //     useFactory:coursesServiceProvider,
  //     deps:[HttpClient]
  //   }
  // ]
  // providers: [
  //  CoursesService
  // ]
  providers: [
    {provide: CONFIG_TOKEN, useValue: APP_CONFIG}
  ]
})
export class AppComponent implements OnInit {


  courses$ : Observable<Course[]>;
  

  // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {

  // }

  constructor(@Optional() private coursesService: CoursesService, @Inject('CONFIG_TOKEN') private config:AppConfig ) {
    console.log(config);

  }

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
    console.log(this.config);
    
   }

   save(course:Course){
     this.coursesService.saveCourse(course).subscribe(
       () => console.log("course saved successfully")
       
     );
   }



}
