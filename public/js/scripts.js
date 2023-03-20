fetch ('/api/workouts')
    .then (response => response.json())
    .then (response => {

        const workoutArr = []

        responseWorkouts = response.workouts.forEach(workout => {

            if (workout.user_id === response.userId) {

                workoutArr.push(workout)
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

function addWorkout() {

    console.log('click')

    const name = document.querySelector('#user-list-title').value.trim();
    const desc = document.querySelector('#user-list-desc').value.trim();
    // const data = document.querySelector('#saved-movements').value.trim();
    const container = document.getElementById('user-workouts');
    const workoutDiv = document.createElement('div');

    workoutDiv.classList.add('saved');
    workoutDiv.textContent = `${name}: ${desc}`;
    container.appendChild(workoutDiv);

    document.querySelector('#user-list-title').value = '';
    document.querySelector('#user-list-desc').value = '';
};

document.querySelector('#add-button').addEventListener('click', addMovement);

document.querySelector('#submit-button').addEventListener('click', addWorkout);
