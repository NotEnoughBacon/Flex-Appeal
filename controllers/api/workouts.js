const router = require('express').Router(); 
const { Workouts } = require('../../models');

// GET all workouts
router.get('/', (req, res) => {
    console.log('======================');
    Workout.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbWorkoutData => res.json(dbWorkoutData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    }); 

// GET a single workout
router.get('/:id', (req, res) => {
    Workout.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
    })
        .then(dbWorkoutData => {
            if (!dbWorkoutData) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }
            res.json(dbWorkoutData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}); 

module.exports = router;