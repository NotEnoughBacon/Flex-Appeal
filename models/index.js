const Movements = require('./Movements');
const Premade = require('./Premade');
const Custom = require('./Custom');
const Users = require('./Users');
const Reps = require('./Reps');
const Sets = require('./Sets');

//Associations

// Premade relationship
Users.hasMany(Premade, {

    foreignKey: 'users_id',
});

Premade.belongsToMany(Users, {

    foreignKey: 'users_id',
    through: 'users_premade_id'
});

Premade.hasMany(Movements, {

    foreignKey: 'premade_id',
});

Movements.belongsToMany(Premade, {

    foreignKey: 'premade_id',
    through: 'premade_movement_id'
});

Movements.hasOne(Sets, {

    foreignKey: 'movements_id',
});

Sets.belongsToMany(Movements, {

    foreignKey: 'movements_id',
    through: 'movements_sets_id'
});

Sets.hasOne(Reps, {

    foreignKey: 'sets_id',
});

Reps.belongsToMany(Sets, {

    foreignKey: 'sets_id',
    through: 'sets_reps_id'
});

// Custom relationship
Users.hasMany(Custom, {

    foreignKey: 'users_id',
});

Custom.belongsToMany(Users, {

    foreignKey: 'users_id',
    through: 'users_custom_id'
});

Custom.hasMany(Movements, {

    foreignKey: 'custom_id',
});

Movements.belongsToMany(Custom, {

    foreignKey: 'custom_id',
    through: 'custom_movement_id'
});

Movements.hasOne(Sets, {

    foreignKey: 'movements_id',
});

Sets.belongsToMany(Movements, {

    foreignKey: 'movements_id',
    through: 'movements_sets_id'
});

Sets.hasOne(Reps, {

    foreignKey: 'sets_id',
});

Reps.belongsToMany(Sets, {

    foreignKey: 'sets_id',
    through: 'sets_reps_id'
});

module.exports = { Movements, Premade, Custom, Users, Reps, Sets };