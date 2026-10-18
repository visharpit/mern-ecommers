import express from 'express';
import {getUser, createUser, updateUser, deleteUser} from './userController.js' 
 const router = express.Router();

 router.get('/', getUser);
 router.post('/users', createUser);
 router.put('/users/:id', updateUser)
 router.delete('/deleteUser/:id', deleteUser)

 export default router