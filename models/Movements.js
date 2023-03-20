const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

class Movements extends Model {}

Movements.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'workouts',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movements',
    }
);

module.exports = Movements;