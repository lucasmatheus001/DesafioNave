

exports.up = function(knex) {
  return knex.schema
    .createTable('navers', t => {
      t.increments('id').primary()
      t.date('birthdate')
      t.string('name')
      t.string('job_role')
      t.timestamps(true, true)
    })
    .createTable('projects', t => {
      t.increments('id').primary()
      t.string('name')
      t.timestamps(true, true)
    })
    .createTable('projects_navers', t => {
      t.increments('id')
      t.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .index()
      t.integer('naver_id')
        .unsigned()
        .references('id')
        .inTable('navers')
        .onDelete('CASCADE')
        .index()
      t.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('navers_projects')
    .dropTableIfExists('navers')
    .dropTableIfExists('projects')
};
