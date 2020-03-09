import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Attribute,
  OnDestroy,
  OnChanges,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  DoCheck
} from "@angular/core";
import { Course } from "src/app/model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    DoCheck {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(@Attribute("type") type: string) {
    console.log("Constructor : ", this.course);
  }

  //gets triggered on change of entire course object change.
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngOnInit() {
    console.log("ngOnInit", this.course);
  }

  //for any custom change detection  ChangeDetectorRef
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    // this.course.description = "new title";
    // this.course.category = "ADVANCED";
    //   ExpressionChangedAfterItHasBeenCheckedError
    //   this.course.iconUrl = "";
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    //    ExpressionChangedAfterItHasBeenCheckedError:
    //    this.course.description = "new values";
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  updateNewTitle(newTitle: string) {
    this.course.description = newTitle;
  }
}
