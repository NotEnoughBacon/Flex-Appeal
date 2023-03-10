const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequalize = require('../connection');
const { DataTypes } = require('sequelize/types');


// Creates a new sequalize model for Users
class User extends Model {
checkPassword(loginPw){
return bcrypt.compareSync(loginPw, this.password);
    }
}

// user attributes that are added to db
User.init(
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

module.exports = User;