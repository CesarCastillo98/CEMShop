import {Router} from 'express';
import { registrerUser,getAllUser,getUserByid } from '../controller/usersController';

const router = Router();

router.post('/register', registrerUser);
router.get('/', getAllUser);
router.get('/:id', getUserByid);

export default router;