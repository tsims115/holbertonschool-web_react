import { schema, normalize } from 'normalizr';

const courses = new schema.Entity('courses');

export function coursesNormalizer(data) {
  const normalized = normalize(data, [courses]);
  return normalized.entities.courses;
}
