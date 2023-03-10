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
    },
);

module.exports = Sets;