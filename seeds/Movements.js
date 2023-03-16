const { Movements } = require('../models');

const movementData = [
    {
        name: 'squats',
        sets: '3',
        reps: '10',
        description: 'squat with barbell on back and feet shoulder width apart and squat down until thighs are parallel to the floor',
        workout_id: []
    },
    {
        name: 'lunges',
        sets: '4',
        reps: '6',
        description: 'step forward with one leg into stride and lower into lunge, bending at both knees. Repeat by stoppping and stepping forward with other leg',
        workout_id: []
    },
    {
        name: 'reverse lunges',
        sets: '4',
        reps: '6',
        description: 'step back with one leg into stride and lower into lunge, bending at both knees. Repeat by stopping and stepping forward with other leg',
        workout_id: []
    },
    {
        name: 'deadlifts',
        sets: '3',
        reps: '8',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and stand up straight',
        workout_id: []
    },
    {
        name: 'Romanian Deadlifts',
        sets: '4',
        reps: '8',
        description: 'stand with feet shoulder width apart and barbell on the floor. Hinge at the hips and grab barbell with hands shoulder width apart. Lift barbell off floor and stand up straight',
        workout_id: []
    },
        {
        name: 'squat jumps',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Squat down and jump up',
        workout_id: []
    },
    {
        name: 'jumping lunges',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Step forward with one leg into stride and lower into lunge, bending at both knees. Jump up and switch legs',
        workout_id: []
    },
    {
        name: 'hip thrusts',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift hips off floor and lower back down',
        workout_id: []
    },
    {
        name: 'hip bridges',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift hips off floor and lower back down',
        workout_id: []
    },
    {
        name: 'side lunges',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Step out to side and lower into lunge, bending at both knees. Repeat by stopping and stepping out with other leg',
        workout_id: []
    },
    {
        name: 'bench press',
        sets: '3',
        reps: '10',
        description: 'lay on bench with barbell on chest and feet on floor. Lift barbell off chest and press up to shoulders',
        workout_id: []
    },
    {
        name: 'overhead press',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on shoulders. Press barbell up over head',
        workout_id: []
    },
    {
        name: 'tricep extensions',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and extend arms behind head',
        workout_id: []
    },
    {
        name: 'pushups',
        sets: '3',
        reps: '10',
        description: 'lay on floor with hands shoulder width apart and feet on floor. Push body up and lower back down',
        workout_id: []
    },
    {
        name: 'shoulder press',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and press up to shoulders',
        workout_id: []
    },
      {
        name: 'dips',
        sets: '3',
        reps: '10',
        description: 'sit on bench with hands shoulder width apart and feet on floor. Lower body to floor and push back up',
        workout_id: []
    },
    {
        name: 'crunches',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift shoulders off floor and lower back down',
        workout_id: []
    },
    {
        name: 'leg raises',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift legs off floor and lower back down',
        workout_id: []
    },
    {
        name: 'planks',
        sets: '3',
        reps: '10',
        description: 'lay on stomach with hands on floor and feet on floor. Lift body off floor and hold',
        workout_id: []
    },
    {
        name: 'side planks',
        sets: '3',
        reps: '10',
        description: 'lay on side with hands on floor and feet on floor. Lift body off floor and hold',
        workout_id: []
    },
    {
        name: 'bicep curls',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and curl up to shoulders',
        workout_id: []
    },
    {
        name: 'pullups',
        sets: '3',
        reps: '10',
        description: 'grab bar with hands shoulder width apart and pull up to chest',
        workout_id: []
    },
    {
        name: 'rows',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and pull to chest',
        workout_id: []
    },
    {
        name: 'bent over rows',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and pull to chest',
        workout_id: []
    },
    {
        name: 'burpees',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Squat down and jump up. Jump feet out to side and jump up. Jump feet back in and jump up',
        workout_id: []
    },
    {
        name: 'jumping jacks',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Jump feet out to side and jump back in',
        workout_id: []
    },
    {
        name: 'mountain climbers',
        sets: '3',
        reps: '10',
        description: 'lay on stomach with hands on floor and feet on floor. Bring one knee in to chest and switch',
        workout_id: []
    },
    {
        name: 'side to side hops',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Hop to side and back',
        workout_id: []
    },
    {
        name: 'high knees',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Bring one knee up to chest and switch',
        workout_id: []
    },
    {
        name: 'skaters',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Hop to side and back',
        workout_id: []
    },
  
];


async function seedMovements() {
    try {
        await Movement.bulkCreate(movementData);
        console.log('movement data seeded');
    } catch (error) {
        console.error('movement data not seeded', error);
    }
};

seedMovements();