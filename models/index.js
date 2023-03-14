const Movements = require('./Movements');
const Workouts = require('./Workouts');
const Users = require('./Users');

//Associations

// Premade relationship
Users.hasMany(Workouts, {

    foreignKey: 'user_id',
});

Workouts.belongsTo(Users, {

    foreignKey: 'user_id',
});

Workouts.hasMany(Movements, {

    foreignKey: 'workout_id',
});

Movements.belongsTo(Workouts, {

    foreignKey: 'workout_id',
});

module.exports = { Movements, Workouts, Users };