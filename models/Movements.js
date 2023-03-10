const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movements extends Model {}

Movements.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sets: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sets',
                key: 'id'
            }
        },
        reps: {
            type: DataTypes.INTEGER,
            references: {
                model: 'reps',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reps',
    }
);

module.exports = Movements;