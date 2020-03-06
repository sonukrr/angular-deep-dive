import { Component, OnInit, ChangeDetectorRef, DoCheck } from "@angular/core";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe(res => (this.courses = res));
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("course saved successfully"));
  }
}
