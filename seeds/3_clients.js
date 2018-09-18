
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {Client_Name: "Marcellus Wallace"},

        {Client_Name: "Concerto"},

        {Client_Name: "Mathilda"},

        {Client_Name: "Winston"},

        {Client_Name: "Ray Vargo"}
      ]);
    });
};
