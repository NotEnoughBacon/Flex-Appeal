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
    
var ctx = document.getElementById('bottom-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Completed Push', 'Completed Pull', 'Completed Legs'],
        datasets: [{
            label: 'Total Number',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        cutoutPercentage: 50, // Percentage of the chart that is cut out of the middle
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});

function update () {
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.map(() => randomScalingFactor());
    });
    myChart.update();
} 



const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);
clockObject.start();