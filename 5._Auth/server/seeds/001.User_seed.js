exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
      .then(() => {
        return knex('users').del();
      })
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([                     // password
          { username: 'admin', first_name: '', password: '$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq'  }, 
          { username: 'poweruser', password: '$2b$10$G/v/MRwgMgOAtCUCQRKJTO8GRD/rKxyu61J5wfYimsHd0/FSxuVAq'  }, 
        ]);
      }).then((userId) => {
        return knex('addresses').insert([
          { user_id: userId[0], address_1: "Something street 12" }
        ]);
      });
};
