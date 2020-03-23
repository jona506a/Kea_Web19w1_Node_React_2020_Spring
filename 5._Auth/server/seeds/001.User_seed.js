exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
      .then(() => {
        return knex('users').del();
      })
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { username: 'admin', first_name: '', password: 'password'  }, 
          { username: 'poweruser', password: 'password123'  }, 
        ]);
      }).then((userId) => {
        return knex('addresses').insert([
          { user_id: userId[0], address_1: "Something street 12" }
        ]);
      });
};
