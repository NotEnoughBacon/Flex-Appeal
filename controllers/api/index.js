const router = require('express').Router();

const users = require('./users');
const workouts = require('./workouts');

router.use('/users', users);
router.use('/workouts', workouts);

module.exports = router;