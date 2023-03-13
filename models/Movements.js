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
        premade_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'premade',
                key: 'id'
            }
        },
        custom_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'custom',
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

module.exports = Movements;