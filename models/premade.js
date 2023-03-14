const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Premade extends Model {}

Premade.init(
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
        modelName: 'premade',
    }
);

module.exports = Premade;