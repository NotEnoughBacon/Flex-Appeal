const router = require('express').Router();
const { Users } = require('../../models');

// POST a new user
router.post('/', async (req, res) => {

    try {

        const newUser = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.name = newUser.name;
            req.session.loggedIn = true;
            res.redirect('/dashboard');
        });

    } catch (err) {
        console.log(err)
    }
});

// Login
router.post('/login', async (req, res) => {

    try{
        const userData = await Users.findOne({ where: { email: req.body.email } });

        if (!userData) {

            res.status(400).json({message: 'Incorrect email or password, please try again'});
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {

            res.status(400).json({message: 'Incorrect email or password, please try again'});
            return;
        }

        req.session.save(() => {
                        // declare session variables
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err)
    }   
});

// Logout
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {

        req.session.destroy(() => {

            res.redirect('/login');
        });
        } else {
        res.status(404).end();
        }
    }
);

module.exports = router;