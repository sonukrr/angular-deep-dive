import { Component, OnInit, ChangeDetectorRef, DoCheck, Injector } from "@angular/core";
import { Course } from "./model/course";
import { COURSES } from "src/db-data";
import { CoursesService } from "./courses/services/courses.service";
import { CourseTitleComponent } from "./course-title/course-title.component";
import { createCustomElement } from '@angular/elements';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  courseTotal:number=COURSES.length;

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef,
    private injector:Injector
  ) {}

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});
    customElements.define('course-title', htmlElement);
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("course saved successfully"));
  }

  destroyCardComponent() {
    this.courses[0] = undefined;
  }

  triggerOnChange() {
    const newCourse = { ...this.courses[0], description: "new title value" };
    this.courses[0] = newCourse;
  }
  categoryChange(){
    this.courses[1].category='ADVANCED';
  }
}
