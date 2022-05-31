import Course  from 'App/Models/Course';
import Factory from '@ioc:Adonis/Lucid/Factory';
import { DevelopmentPathFactory } from './develoment_path';

export const CourseFactory = Factory
  .define(Course, ({ faker }) => {
  
    return {
      title: faker.lorem.word(10),
      description: faker.lorem.word(50),
      thumbnail: faker.image.avatar()
    }

  })
  .relation('development_path', () => DevelopmentPathFactory)
  .build()
