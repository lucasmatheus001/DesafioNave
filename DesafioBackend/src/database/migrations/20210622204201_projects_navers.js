
exports.up = function(knex) {
    return knex.schema
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
    .dropTableIfExists('projects')
};
