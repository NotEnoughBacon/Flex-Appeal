const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

class Sets extends Model {}

Sets.init(
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
        reps_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'reps',
                key: 'id',
            }
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
        modelName: 'sets',
    }
);

module.exports = Sets;