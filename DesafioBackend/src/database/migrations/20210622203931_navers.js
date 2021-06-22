
exports.up = function(knex) {
    return knex.schema
    .createTable('navers', t => {
      t.increments('id').primary()
      t.date('birthdate')
      t.string('name')
      t.string('job_role')
      t.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('navers_projects')
};
