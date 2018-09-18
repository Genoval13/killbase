
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', function (table) {
      table.increments('Client_ID');
      table.string('Client_Name', 60);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients');
};
