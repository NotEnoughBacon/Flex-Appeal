const router = require('express').Router();
const { Movements } = require('../../models');

router.get('/', async (req, res) => {

    try {

        const movementsData = await Movements.findAll();

        res.status(200).json(movementsData);

    } catch (err) {

        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {

        await Movements.create({

            name: req.body.name,
            sets: req.body.sets,
            reps: req.body.reps,
            workout_id: req.body.workout_id
        });

        res.status(200).json({message: 'Movement created'});
    } catch (err) {

        console.log(err)
    }
});

module.exports = router;