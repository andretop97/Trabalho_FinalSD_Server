import { Router } from 'express';
import {
  createUser,
  isUser,
  login,
} from './database/MongoDB/controllers/authController';
import {
  transfer,
  getAllUsersAndMe,
} from './database/MongoDB/controllers/transactions';

const router = Router();

router.post('/register', createUser);

router.post('/deposit', transfer);

router.post('/isUser', isUser);

router.post('/login', login);

router.post('/users', getAllUsersAndMe);

export { router };
