const sequelize = require("../connection/connection")
const seedMovements = require("./movements")
const seedWorkouts = require("./workouts")

const seedAll = async () => {

    await sequelize.sync({ force: true });

    await seedWorkouts();

    await seedMovements();

    process.exit(0);
};

seedAll();