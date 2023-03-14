const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../connection/connection');


// Creates a new sequalize model for Users
class Users extends Model {
checkPassword(loginPw){
return bcrypt.compareSync(loginPw, this.password);
    }
}

// user attributes that are added to db
Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,64],
            },
        },
        premade_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'premade',
                key: 'id',
            },
        },
        custom_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'custom',
                key: 'id',
            },
        },
    },
    {       // add psw hashing before adding to db
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash
                (newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },

);

module.exports = Users;