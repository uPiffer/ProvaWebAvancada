import { Router } from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

export default router;
