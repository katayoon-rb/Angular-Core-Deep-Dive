import { Request, Response } from 'express';
import { COURSES } from '../src/db-data';

export function getAllCourses(req: Request, res: Response) {
  res.status(200).json(Object.values(COURSES));
}

export function getCourseById(req: Request, res: Response) {
  const courses: any = Object.values(COURSES);
  const course = courses.find(
    (course: { id: string }) => course.id == req.params['id']
  );
  res.status(200).json(course);
}
