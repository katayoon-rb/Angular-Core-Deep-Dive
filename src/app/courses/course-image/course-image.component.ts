import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  standalone: true,
})
export class CourseImageComponent implements OnInit {
  @Input('src') imageUrl: string;
  constructor() {}
  ngOnInit() {}
}
