const router = require('express').Router();
const { User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        return;
    }
    
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

module.exports = router;

