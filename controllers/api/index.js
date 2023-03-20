const router = require('express').Router();

const users = require('./users');
const workouts = require('./workouts');
// const movements = require('./movements');

// router.use('/movements', movements);
router.use('/users', users);
router.use('/workouts', workouts);

module.exports = router;