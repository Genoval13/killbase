
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function (table) {
      table.increments('Contract_ID');
      table.integer('Targets_ID').references('Target_ID').inTable('targets');
      table.integer('Client_ID').references('Client_ID').inTable('clients');
      table.integer('Budget');
      table.boolean('Completed');
      table.string('By_Whom');
  }).then((res) => {
    return knex('contracts')
    //     .select('targets.Target_Name')
    //     .join('targets', 'contracts.Targets_ID', '=', 'targets.Target_ID');
        // .join('Clients', 'contracts.Client_ID', 'Clients.Client_Name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts');
};
