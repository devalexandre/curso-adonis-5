import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Weeks extends BaseSchema {
  protected tableName = 'weeks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title',100).notNullable()
      table.integer('order').notNullable()

      table.integer('course_id')
      .unsigned()
      .references('id')
      .inTable('courses')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at',{ useTz: true })
      table.timestamp('updated_at',{ useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
