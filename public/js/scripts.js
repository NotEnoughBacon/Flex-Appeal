let movementArray;

const preMadeArray = []

fetch ('/api/workouts')
    .then (response => response.json())
    .then (response => {

        const workoutArr = []

        responseWorkouts = response.workouts.forEach(workout => {

            if (workout.user_id === response.userId) {

                workoutArr.push(workout)
            } else if (workout.user_id === null) {

                preMadeArray.push(workout)
                console.log(preMadeArray);
            }

        });

        const container = document.getElementById('user-workouts');

        workoutArr.forEach(workout => {
                
                const workoutDiv = document.createElement('div');
                workoutDiv.classList.add('saved');
                workoutDiv.textContent = workout.name;

                container.appendChild(workoutDiv);
        })
    })
.catch (error => console.error(error));

function addMovement() {

    console.log('click')

    const movementArray = []

    const name = document.querySelector('#workout-name').value.trim();
    const sets = document.querySelector('#workout-sets').value.trim();
    const reps = document.querySelector('#workout-reps').value.trim();
    const container = document.getElementById('saved-movements');

    if (name && sets && reps) {



        const movementDiv = document.createElement('div');
        movementDiv.classList.add('saved');
        movementDiv.textContent = `${name}: ${sets} sets of ${reps}`;
        container.appendChild(movementDiv);

        document.querySelector('#workout-name').value = '';
        document.querySelector('#workout-sets').value = '';
        document.querySelector('#workout-reps').value = '';
    }
};

// function addWorkout() {

//     console.log('click')

//     const name = document.querySelector('#user-list-title').value.trim();
//     const desc = document.querySelector('#user-list-desc').value.trim();
//     // const data = document.querySelector('#saved-movements').value.trim();
//     const container = document.getElementById('user-workouts');
//     const workoutDiv = document.createElement('div');

//     workoutDiv.classList.add('saved');
//     workoutDiv.textContent = `${name}: ${desc}`;
//     container.appendChild(workoutDiv);

//     document.querySelector('#user-list-title').value = '';
//     document.querySelector('#user-list-desc').value = '';
// };

function randomWorkout1() {
    console.log('click');

    const result1 = preMadeArray.find(obj => obj.id === 1);
    const container = document.getElementById('user-results');

    container.innerHTML= '';

    const resultDiv = document.createElement('div');

    resultDiv.classList.add('result');

    resultDiv.textContent = `Name: ${result1.name} \n\n Description: ${result1.description}`;
    container.appendChild(resultDiv);

    console.log(result1);
}

function randomWorkout2() {
    console.log('click');

    const result2 = preMadeArray.find(obj => obj.id === 2);
    const container = document.getElementById('user-results');

    container.innerHTML= '';

    const resultDiv = document.createElement('div');

    resultDiv.classList.add('result');

    resultDiv.textContent = `Name: ${result2.name} \n\n Description: ${result2.description}`;
    container.appendChild(resultDiv);

    console.log(result2);
}

function randomWorkout3() {
    document.querySelector('#user-results').value = '';
    console.log('click');

    const result3 = preMadeArray.find(obj => obj.id === 3);
    const container = document.getElementById('user-results');

    container.innerHTML= '';

    const resultDiv = document.createElement('div');

    resultDiv.classList.add('result');

    resultDiv.textContent = `Name: ${result3.name} \n\n Description: ${result3.description}`;
    container.appendChild(resultDiv);

    console.log(result3);
}

document.querySelector('#add-button').addEventListener('click', addMovement);

// document.querySelector('#submit-button').addEventListener('click', addWorkout);

document.querySelector('#push-workout').addEventListener('click', randomWorkout1);
document.querySelector('#pull-workout').addEventListener('click', randomWorkout2);
document.querySelector('#leg-workout').addEventListener('click', randomWorkout3);