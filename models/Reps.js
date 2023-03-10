const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

class Reps extends Model {}

Reps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        movement_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movements',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reps',
    }
);

module.exports = Reps;