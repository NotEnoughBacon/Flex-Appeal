class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
};
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

fetch ('/api/workouts')
    .then (response => response.json())
    .then (response => {

        const userWorkoutsArray = []

        userWorkouts = response.workouts.forEach(workout => {

            if (workout.user_id === response.userId) {

                userWorkoutsArray.push(workout)
            }
        })
        
        console.log(userWorkoutsArray)

        const container = document.getElementById('bottom-1');

        userWorkoutsArray.forEach(workout => {

            const workoutDiv = document.createElement('div');
            workoutDiv.classList.add('workout-div');

            const workoutName = document.createElement('h3');
            workoutName.textContent = workout.name;
            workoutDiv.appendChild(workoutName);

            container.appendChild(workoutDiv);
        });
    })
.catch (error => console.error(error));
    


clockObject.start();