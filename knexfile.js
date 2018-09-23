// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  'postgress://localhost/killt_base'
  },

  production: { 
    client: 'pg', 
    connection: 'postgress://bryan-killbase.herokuapp.com/' }
};
