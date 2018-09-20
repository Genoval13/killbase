
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {
        Targets_ID: 1, 
        Client_ID: 1,
        Budget: 40,
        Completed: false,
        By_Whom: ''},

        {
        Targets_ID: 2,
        Client_ID: 2,
        Budget: 70,
        Completed: true,
        By_Whom: 'Leon'},

        {
        Targets_ID: 3,
        Client_ID: 3,
        Budget: 35,
        Completed: false,
        By_Whom: ''},

        {
        Targets_ID: 4,
        Client_ID: 4,
        Budget: 25,
        Completed: false,
        By_Whom: ''},

        {
        Targets_ID: 5,
        Client_ID: 5,
        Budget: 10,
        Completed: true,
        By_Whom: 'John Wick'}
      ]);
    });
};
