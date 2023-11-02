import { Sequelize } from "sequelize";

const db = new Sequelize('crud_js', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// export const agar bisa di use dimana saja
export default db;