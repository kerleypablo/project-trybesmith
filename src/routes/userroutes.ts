import { Router } from 'express';
import usercontroller from '../controller/userController';

const router = Router();

router.post('/', usercontroller.create);

export default router;