'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.integer('place_id').notNullable()
      table.string('name').notNullable()
      table.string('date').notNullable()
      table.time('start').notNullable()
      table.time('end').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
