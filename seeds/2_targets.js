
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('targets').del()
    .then(function () {
      // Inserts seed entries
      return knex('targets').insert([
        {Target_Name: "Butch Coolidge",
        Target_Location: "Los Angeles",
        Target_Img: "https://goo.gl/LCquZj",
        Target_Security: 3},

        {Target_Name: "The Jaguar",
        Target_Location: "Russian Embassy",
        Target_Img: "https://goo.gl/6JWsiv",
        Target_Security: 9},

        {Target_Name: "Norman Stansfield",
        Target_Location: "Manhattan",
        Target_Img: "https://i.imgur.com/mdIk33E.jpg",
        Target_Security: 7},

        {Target_Name: "Santino D'Antonio",
        Target_Location: "Continental Hotel",
        Target_Img: "https://goo.gl/fUPkYy",
        Target_Security: 10},

        {Target_Name: "Sonny Valerio",
        Target_Location: "Queens",
        Target_Img: "https://goo.gl/8DHYUS",
        Target_Security: 4}
      ]);
    });
};
