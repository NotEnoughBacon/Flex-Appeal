const { Workouts } = require('../models');

const workoutData = [
    {
        id: [1],
        name: 'Push Workout',
        description: 'burpees, jumping jacks,  mountain climbers, pushups, overhead press, bench press, dips, tricep extensions, crunches, leg raises. '
    },
    { 
        id: [2],
        name: 'Pull Workout',
        description : 'side to side hops, bent over rows, pullups, rows, deadlifts, Romanian Deadlifts, planks, side planks, bicep curls. '
    },
    { 
        id: [3],
        name: 'Legs Workout',
        description : 'high knees, skaters, squats, lunges, reverse lunges, squat jumps, jumping lunges, hip thrusts, hip bridges, side lunges.'
    },

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