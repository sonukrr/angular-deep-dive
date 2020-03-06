import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation,
    Inject,
    ChangeDetectionStrategy,
    Attribute
} from '@angular/core';
import {Course} from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
    // providers: [
    //     CoursesService
    //    ]
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    // constructor(@Inject(COURSES_SERVICE) private coursesService:CoursesService) {

    // }

    constructor( private coursesService:CoursesService, @Attribute('type') private type:string) {

        console.log(type);
        
    }

    ngOnInit() {
    console.log("coursesService course card",this.coursesService);

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

    updateNewTitle(newTitle: string){
        this.course.description = newTitle;
    }

    


}
