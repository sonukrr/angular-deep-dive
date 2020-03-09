import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CoursesService } from "./services/courses.service";
import { CourseImageComponent } from "./course-image/course-image.component";
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
  declarations: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe],
  imports: [CommonModule],
  providers: [CoursesService],
  exports: [CourseCardComponent, CourseImageComponent,FilterByCategoryPipe]
})
export class CoursesModule {}
