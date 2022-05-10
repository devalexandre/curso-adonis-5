import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LessonsWeeks extends BaseSchema {
  protected tableName = 'lessons_weeks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('order').notNullable()

      table.integer('week_id')
      .unsigned()
      .references('id')
      .inTable('weeks')
  
      table.integer('lesson_id')
      .unsigned()
      .references('id')
      .inTable('lessons')
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
