import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Attribute
} from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(@Attribute("type") type: string) {
    console.log(type);
  }

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  updateNewTitle(newTitle: string) {
    this.course.description = newTitle;
  }
}
