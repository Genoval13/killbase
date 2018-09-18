
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      return knex('assassins').insert([
        {
          Assassin_Name: "Alexander Duggan",
          Code_Name: "The Jackal",
          Weapon: "Sniper rifle",
          Age: 31,
          Min_Price: 45,
          Rating: 7.5,
          Kills: 28
        },
        {
          Assassin_Name: "Anton Chigurh",
          Code_Name: "Old Man",
          Weapon: "Pneumatic bolt gun",
          Age: 52,
          Min_Price: 40,
          Rating: 9,
          Kills: 72
        },
        {
          Assassin_Name: "",
          Code_Name: "Ghost Dog",
          Weapon: "Pistol",
          Age: 28,
          Min_Price: 20,
          Rating: 6.5,
          Kills: 35
        },
        {
          Assassin_Name: "Jason Bourne",
          Code_Name: "",
          Weapon: "Parkour",
          Age: 27,
          Min_Price: 25,
          Rating: 7,
          Kills: 48
        },
        {
          Assassin_Name: "John Wick",
          Code_Name: "Baba Yaga",
          Weapon: "Lots of guns",
          Age: 35,
          Min_Price: 50,
          Rating: 9.5,
          Kills: 433
        },
        {
          Assassin_Name: "Jules Winnfield",
          Code_Name: "",
          Weapon: "Pistol",
          Age: 26,
          Min_Price: 15,
          Rating: 6.5,
          Kills: 13
        },
        {
          Assassin_Name: "Leon",
          Code_Name: "The Professional",
          Weapon: "Everything",
          Age: 41,
          Min_Price: 30,
          Rating: 8.5,
          Kills: 87
        },
        {
          Assassin_Name: "Nikita Mears",
          Code_Name: "Nikita, La Femme Nikita",
          Weapon: "Silenced pistols",
          Age: 28,
          Min_Price: 30,
          Rating: 7,
          Kills: 32
        },
        {
          Assassin_Name: "Pickle Rick",
          Code_Name: "Solenya",
          Weapon: "Lasers and office supplies",
          Age: 60,
          Min_Price: 0,
          Rating: 8,
          Kills: 24
        }
      ]);
    });
};
