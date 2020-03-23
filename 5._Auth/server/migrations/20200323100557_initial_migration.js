
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('username');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users');
};
