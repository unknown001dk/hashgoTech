import express from 'express';
import { userRegister } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', userRegister);

export default router;