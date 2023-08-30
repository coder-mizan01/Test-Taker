
import express from 'express';

import {registerController,loginController,userController} from '../Controllers/UserController.js';
import { requireSignin } from '../MiddleWare/AuthMiddleware.js';


const router = express.Router();


    
router.post('/register',registerController)

router.post('/login',loginController);

router.get('/users', userController);

export default router;