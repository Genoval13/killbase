
exports.up = function(knex, Promise) {
  return knex.schema.createTable('targets', function (table) {
      table.increments('Target_ID');
      table.string('Target_Name', 60).unique();
      table.string('Target_Location', 60);
      table.string('Target_Img');
      table.integer('Target_Security');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('targets');
};
