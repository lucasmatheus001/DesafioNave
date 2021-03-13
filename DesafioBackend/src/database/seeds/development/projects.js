
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Projeto meu PS minha vida'},
        {name: 'FPS game'},
        {name: 'App de organização laboral'}
      ]);
    });
};
