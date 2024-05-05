import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/courses.service';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {}
  ngOnInit() {}

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log('Course Saved!'));
  }
}
