
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', t => {
      t.increments('id').primary()
      t.string('name')
      t.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('navers')
};
