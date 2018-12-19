
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', function (table) {
    table.increments('Assassin_ID');
    table.string('Assassin_Name', 60);
    table.string('Code_Name', 60);
    table.string('Weapon', 60);
    table.integer('Age');
    table.integer('Min_Price');
    table.float('Rating');
    table.integer('Kills');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};
