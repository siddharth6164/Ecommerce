import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

// Handle preflight requests for specific routes
userRouter.options('/register', (req, res) => {
    res.status(204).end();
});

userRouter.options('/login', (req, res) => {
    res.status(204).end();
});

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter;