import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  //  console.log('Card 1',this.card1); 
  console.log(this.cards);

  this.cards.changes.subscribe(cards => console.log(cards));
  
  }

  
  courses: Array<Course> = COURSES;
  //  coreCourse:Course = COURSES[0];
  //  RxjsCourse:Course = COURSES[1];
  //  NgrxCourse:Course = COURSES[2];

  title = COURSES[0].description;
  startDate = new Date(2000, 0, 1);

  course = COURSES[0];

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;


  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  @ViewChildren(CourseCardComponent, {read:ElementRef})
  cards:QueryList<ElementRef>;

  oncourseClicked(course: Course) {
    // console.log(this.card1);
    // console.log(this.card2);

  }

  editCourses(){
    this.courses.pop();
  }
}
