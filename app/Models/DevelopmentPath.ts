import { DateTime } from 'luxon'
import { BaseModel, column , hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Course from './Course'

export default class DevelopmentPath extends BaseModel {
  public static table ='development_paths'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string | null

  @column()
  public thumbnail: string | null

  @hasMany(() => Course,{foreignKey: 'development_path_id'})
  public courses: HasMany<typeof Course>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
