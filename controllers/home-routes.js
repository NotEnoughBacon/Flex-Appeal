const router = require('express').Router();
const { Users, Workouts } = require('../models');
const path = require('path');

router.get('/login', (req, res) => {
    
   if (req.session.loggedIn) {
       res.redirect('/dashboard');
       return;
   }
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/dashboard', async (req, res) => {

   if (!req.session.loggedIn) {
        res.redirect('/login')
        return;
   }
   res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

router.get('/search', (req, res) => {

    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.sendFile(path.join(__dirname, '../public/search.html'));
})

module.exports = router;