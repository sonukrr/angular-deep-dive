import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, InjectionToken, Inject, Optional, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [
  //   { provide: COURSES_SERVICE, 
  //     useFactory:coursesServiceProvider,
  //     deps:[HttpClient]
  //   }
  // ]
  // providers: [
  //  CoursesService
  // ]
  // providers: [
  //   {provide: CONFIG_TOKEN, useValue: APP_CONFIG}
  // ]
})
export class AppComponent implements OnInit , DoCheck{


 
  // courses$ : Observable<Course[]>;
  courses: Course[];
  

  // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {

  // }

  // constructor(@Optional() private coursesService: CoursesService, @Inject('CONFIG_TOKEN') private config:AppConfig ) {
  //   console.log(config);

  // }
  constructor(private coursesService: CoursesService, private cd:ChangeDetectorRef){

  }

  ngOnInit() {
     this.coursesService.getCourses().subscribe(res=> this.courses = res);
    // console.log(this.config);
    
    
   }
   ngDoCheck(){
    this.cd.markForCheck();
   }

   save(course:Course){
     this.coursesService.saveCourse(course).subscribe(
       () => console.log("course saved successfully")
       
     );
   }

  //  onEditCourse()
  //  {
     
  //    const newCourse = {...this.courses[0]};
  //    newCourse.description = 'new Value';
  //    this.courses[0] = newCourse;
  //  }



}
