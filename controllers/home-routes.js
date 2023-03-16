const router = require('express').Router();
const { Users, Workouts } = require('../models');
const path = require('path');

const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    console.log('IM HERE B*TCH')
    if (req.session.logged_in) {
        res.sendFile(path.join(__dirname, '../public/dashboard.html'));
        return;
    }

    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;