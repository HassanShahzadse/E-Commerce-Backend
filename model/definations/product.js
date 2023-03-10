const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Product extends Model {};
Product.init(
    {
        id:{
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            type:DataTypes.INTEGER,
        },

        title:{
            allowNull:false,
            type:DataTypes.STRING(),
        },

        description:{
            allowNull:false,
            type:DataTypes.STRING(1234),
        },

        category:{
            allowNull:false,
            type:DataTypes.STRING(),
        },
        price:{
            allowNull:false,
            type:DataTypes.DOUBLE,
        },
        image:{
            allowNull:false,
            type:DataTypes.STRING(),
        }
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Product"
    }
)
module.exports = Product;