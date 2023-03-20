const router = require('express').Router(); 
const { Workouts } = require('../../models');

// GET all workouts
router.get('/', async (req, res) => {

    try {

        const workoutsData = await Workouts.findAll();

        const responseData = {

            userId: req.session.user_id,
            workouts: workoutsData
        }

        res.status(200).json(responseData);

    } catch (err) {

        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        const newWorkout = await Workouts.create(req.body);

        res.status(200).json(newWorkout);

    } catch (err) {

        res.status(400).json(err);
    }
});
    
 

module.exports = router;