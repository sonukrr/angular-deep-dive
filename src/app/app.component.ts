import { Component, OnInit, ChangeDetectorRef, DoCheck } from "@angular/core";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
import { COURSES } from "src/db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

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
}
