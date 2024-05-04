import {
  Attribute,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone: true,
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() cardIndex: number;
  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();
  @Output() courseTitle = '';
  @Output() isEditing = false;

  constructor(
    private coursesService: CoursesService,
    @Attribute('type') private type: string
  ) {}

  ngOnInit() {}

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
    this.courseTitle = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
    this.isEditing = false;
  }

  onEditTitle() {
    this.isEditing = true;
  }
}
