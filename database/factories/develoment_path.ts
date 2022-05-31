import DevelopmentPath  from 'App/Models/DevelopmentPath';
import Factory from '@ioc:Adonis/Lucid/Factory';


export const DevelopmentPathFactory = Factory
  .define(DevelopmentPath, ({ faker }) => {
  
    return {
      title: faker.lorem.word(10),
      description: faker.lorem.word(50),
      thumbnail: faker.image.avatar()
    }

  })
  .build()
