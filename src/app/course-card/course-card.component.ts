import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelectedEmitter = new EventEmitter<Course>();

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
