import { Sequelize } from "sequelize";

export default new Sequelize(
    process.env.DB_NAME || '', // Название БД
    process.env.USER_NAME || '', // Пользователь
    process.env.PASSWORD || '', // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.HOST_NAME || '',
        // port: Number(process.env.PORT)
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    }
)

// import { Sequelize } from "sequelize";


// export default new Sequelize(
//     'devs', // Название БД
//     'dimas', // Пользователь
//     'root', // ПАРОЛЬ
//     {
//         dialect: 'postgres',
//         host: 'localhost',
//         port: 5432
//     }
// )