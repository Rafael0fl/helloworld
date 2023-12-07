import { DataTypes } from 'sequelize';

import {sequelize} from '../database/db.js';

export const datos_usuarios = sequelize.define('datos_usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    lastname:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    username:{
        type: DataTypes.STRING(30),
        unique:true,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING(20),
        allowNull:false
    }
    },
    {
        timestamps: false
    }
);

