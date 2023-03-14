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
    through: 'users.premade_id'
});

Premade.hasMany(Movements, {

    foreignKey: 'premade_id',
});

Movements.belongsToMany(Premade, {

    foreignKey: 'premade_id',
    through: 'premade.movement_id'
});

Movements.hasOne(Sets, {

    foreignKey: 'movements_id',
});

Sets.belongsToMany(Movements, {

    foreignKey: 'movements_id',
    through: 'movements.sets_id'
});

Sets.hasOne(Reps, {

    foreignKey: 'sets_id',
});

Reps.belongsToMany(Sets, {

    foreignKey: 'sets_id',
    through: 'sets.reps_id'
});

// Custom relationship
Users.hasMany(Custom, {

    foreignKey: 'users_id',
});

Custom.belongsToMany(Users, {

    foreignKey: 'users_id',
    through: 'users.custom_id'
});

Custom.hasMany(Movements, {

    foreignKey: 'custom_id',
});

Movements.belongsToMany(Custom, {

    foreignKey: 'custom_id',
    through: 'custom.movement_id'
});

Movements.hasOne(Sets, {

    foreignKey: 'movements_id',
});

Sets.belongsToMany(Movements, {

    foreignKey: 'movements_id',
    through: 'movements.sets_id'
});

Sets.hasOne(Reps, {

    foreignKey: 'sets_id',
});

Reps.belongsToMany(Sets, {

    foreignKey: 'sets_id',
    through: 'sets.reps_id'
});

module.exports = { Movements, Premade, Custom, Users, Reps, Sets };