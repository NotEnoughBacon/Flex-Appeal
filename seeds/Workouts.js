const { Workouts } = require('../models');

const workoutData = [
    {
        name: 'legs 1',
        description: ''
    }
];

async function seedWorkouts() {
    try {
        await Workouts.bulkCreate(workoutData);
        console.log('workout data seeded');
    } catch (error) {
        console.error('workout data not seeded', error);
    }
};

seedWorkouts();