import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Course } from "../model/course";
import { COURSES } from "src/db-data";

//tree-shakable provider
@Injectable({
  providedIn: "root"
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    //use of async pipe over observable's take care of subscribing and unsubscribing(preventing memory leaks)
    //  return  this.http.get<Course[]>('/api/courses',{params});

    return of(COURSES);
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set("X-Auth", "userId");
    return this.http.put(`\api\courses\${course.id}`, course);
  }
}
