import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// fungsi dari sequelize
const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

// export Model User
export default User;

// buat function untuk generate tabel user
(async()=>{

    await db.sync();
})();