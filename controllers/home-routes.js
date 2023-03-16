const router = require('express').Router();
const { Users, Workouts } = require('../models');

const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.sendFile(path.join(__dirname, '../public/dashboard.html'));
        return;
    }

    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;