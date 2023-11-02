import express from "express";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";

// buat variabel express
const app = express();

// menggunakan lib yang diimport
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// mementukan port
app.listen(5000, ()=> console.log('Server Running in port 5000'));