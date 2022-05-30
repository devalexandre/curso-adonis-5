import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import DevelopmentPath from './DevelopmentPath'
import Week from './Week'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string 
  
  @column()
  public thumbnail: string 

  @column()
  development_path_id: number;

  @belongsTo(() => DevelopmentPath, {foreignKey: 'development_path_id'})
  public development_path: BelongsTo<typeof DevelopmentPath>

  @hasMany(() => Week, {foreignKey: 'course_id'})
  public weeks: HasMany<typeof Week>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
