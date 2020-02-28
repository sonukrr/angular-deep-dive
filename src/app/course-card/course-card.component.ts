import { Component, OnInit, Input, Output, EventEmitter, ContentChild, AfterViewInit, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelectedEmitter = new EventEmitter<Course>();

  // @ContentChild(CourseImageComponent,{read:ElementRef} )
  // image:ElementRef;

   @ContentChildren(CourseImageComponent )
  images:QueryList<CourseImageComponent>;

  ngAfterViewInit(): void {
  // console.log(this.image);
  }

  ngAfterContentInit(): void {
  console.log(this.images);
  }

  onCourseViewed() {
    this.courseSelectedEmitter.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
