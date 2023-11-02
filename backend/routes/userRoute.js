import express from "express";
import { 
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controller/userController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users/create', createUser);
router.patch('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);


export default router;