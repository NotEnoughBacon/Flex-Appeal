let movementArray = []

const fetchData = () => {
    fetch ('/api/workouts')
    .then (response => response.json())
    .then (response => {

        sessionStorage.setItem('userId', response.userId)

        const workoutArr = []

        responseWorkouts = response.workouts.forEach(workout => {

            if (workout.user_id === response.userId) {

                workoutArr.push(workout)
            }
        });

        const container = document.getElementById('user-workouts');
        container.innerHTML = '';

        workoutArr.forEach(workout => {
                
                const workoutDiv = document.createElement('div');
                workoutDiv.classList.add('saved');
                workoutDiv.textContent = workout.name;

                container.appendChild(workoutDiv);
        })


    }).catch (error => console.error(error));
};

function addMovement() {

    console.log('click')

    const name = document.querySelector('#workout-name').value.trim();
    const sets = document.querySelector('#workout-sets').value.trim();
    const reps = document.querySelector('#workout-reps').value.trim();
    const container = document.getElementById('saved-movements');

    if (name && sets && reps) {

        const movementObj = {
            name: name,
            sets: sets,
            reps: reps
        };

        movementArray.push(movementObj);

        const movementDiv = document.createElement('div');
        movementDiv.classList.add('saved');
        movementDiv.textContent = `${name}: ${sets} sets of ${reps}`;
        container.appendChild(movementDiv);

        document.querySelector('#workout-name').value = '';
        document.querySelector('#workout-sets').value = '';
        document.querySelector('#workout-reps').value = '';

        console.log(movementArray)
    }
};

async function addWorkout() {

    const workoutName = document.querySelector('#user-list-title').value.trim();
    const workoutDesc = document.querySelector('#user-list-desc').value.trim();

    if (workoutName && workoutDesc) {

        const workoutApi = await fetch ('/api/workouts', {

            method: 'POST',
            body: JSON.stringify({
                name: workoutName,
                description: workoutDesc,
                user_id: sessionStorage.getItem('userId')
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (workoutApi.ok) {

            const workoutData = await workoutApi.json();

            const workoutId = workoutData.id;

            movementArray.forEach(async movement => {

                const movementApi = await fetch ('/api/movements', {

                    method: 'POST',
                    body: JSON.stringify({
                        name: movement.name,
                        sets: movement.sets,
                        reps: movement.reps,
                        workout_id: workoutId
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (movementApi.ok) {

                    console.log('success')
                    movementArray = [];
                    document.querySelector('#user-list-title').value = '';
                    document.querySelector('#user-list-desc').value = '';
                    // document.getElementById('user-workouts').innerHTML = '';
                    fetchData();
                }
            })
        }
    }
};

document.querySelector('#add-button').addEventListener('click', addMovement);
document.querySelector('#submit-button').addEventListener('click', addWorkout);
fetchData();