const { premade } = require('../models');

const preData = [
    {
        name: 'squats',
        sets: '3',
        reps: '10',
        description: 'squat with barbell on back and feet shoulder width apart and squat down until thighs are parallel to the floor'
    },
    {
        name: 'lunges',
        sets: '4',
        reps: '6',
        description: 'step forward with one leg into stride and lower into lunge, bending at both knees. Repeat by stoppping and stepping forward with other leg'
    },
    {
        name: 'reverse lunges',
        sets: '4',
        reps: '6',
        description: 'step back with one leg into stride and lower into lunge, bending at both knees. Repeat by stopping and stepping forward with other leg'
    },
    {
        name: 'deadlifts',
        sets: '3',
        reps: '8',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and stand up straight'
    },
    {
        name: 'Romanian Deadlifts',
        sets: '4',
        reps: '8',
        description: 'stand with feet shoulder width apart and barbell on the floor. Hinge at the hips and grab barbell with hands shoulder width apart. Lift barbell off floor and stand up straight'
    },
        {
        name: 'squat jumps',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Squat down and jump up'
    },
    {
        name: 'jumping lunges',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Step forward with one leg into stride and lower into lunge, bending at both knees. Jump up and switch legs'
    },
    {
        name: 'hip thrusts',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift hips off floor and lower back down'
    },
    {
        name: 'hip bridges',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift hips off floor and lower back down'
    },
    {
        name: 'side lunges',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Step out to side and lower into lunge, bending at both knees. Repeat by stopping and stepping out with other leg'
    },
    {
        name: 'bench press',
        sets: '3',
        reps: '10',
        description: 'lay on bench with barbell on chest and feet on floor. Lift barbell off chest and press up to shoulders'
    },
    {
        name: 'overhead press',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on shoulders. Press barbell up over head'
    },
    {
        name: 'tricep extensions',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and extend arms behind head'
    },
    {
        name: 'pushups',
        sets: '3',
        reps: '10',
        description: 'lay on floor with hands shoulder width apart and feet on floor. Push body up and lower back down'
    },
    {
        name: 'shoulder press',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and press up to shoulders'
    },
      {
        name: 'dips',
        sets: '3',
        reps: '10',
        description: 'sit on bench with hands shoulder width apart and feet on floor. Lower body to floor and push back up'
    },
    {
        name: 'crunches',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift shoulders off floor and lower back down'
    },
    {
        name: 'leg raises',
        sets: '3',
        reps: '10',
        description: 'lay on back with knees bent and feet on floor. Lift legs off floor and lower back down'
    },
    {
        name: 'planks',
        sets: '3',
        reps: '10',
        description: 'lay on stomach with hands on floor and feet on floor. Lift body off floor and hold'
    },
    {
        name: 'side planks',
        sets: '3',
        reps: '10',
        description: 'lay on side with hands on floor and feet on floor. Lift body off floor and hold'
    },
    {
        name: 'bicep curls',
        sets: '3',
        reps: '10',
        description: 'hold dumbbells at sides and curl up to shoulders'
    },
    {
        name: 'pullups',
        sets: '3',
        reps: '10',
        description: 'grab bar with hands shoulder width apart and pull up to chest'
    },
    {
        name: 'rows',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and pull to chest'
    },
    {
        name: 'bent over rows',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart and barbell on the floor. Bend at knees and hips and grab barbell with hands shoulder width apart. Lift barbell off floor and pull to chest'
    },
    {
        name: 'burpees',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Squat down and jump up. Jump feet out to side and jump up. Jump feet back in and jump up'
    },
    {
        name: 'jumping jacks',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Jump feet out to side and jump back in'
    },
    {
        name: 'mountain climbers',
        sets: '3',
        reps: '10',
        description: 'lay on stomach with hands on floor and feet on floor. Bring one knee in to chest and switch'
    },
    {
        name: 'side to side hops',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Hop to side and back'
    },
    {
        name: 'high knees',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Bring one knee up to chest and switch'
    },
    {
        name: 'skaters',
        sets: '3',
        reps: '10',
        description: 'stand with feet shoulder width apart. Hop to side and back'
    },
  
];

const seedPre = () => premade.bulkCreate(preData);

module.exports = seedPre;