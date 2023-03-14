const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');


class Custom extends Model {}

Custom.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{},
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        movements_id:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sets_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'sets',
                key: 'id'
            },
        },    
        reps_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'reps',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'custom',
    }
);



module.exports = Custom;