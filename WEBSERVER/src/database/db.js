import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'WEB',
    'postgres',
    'anzu240996',
    {
    host: 'localhost',
    dialect: 'postgres',
    }
)