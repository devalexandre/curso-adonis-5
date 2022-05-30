import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DevelopmentPath extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string 


  @column()
  public description: string | null 

  @column()
  public thumbnail: string | null 


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
