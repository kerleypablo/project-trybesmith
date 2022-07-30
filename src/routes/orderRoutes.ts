import { Router } from 'express';
import orderController from '../controller/orderController';

const router = Router();

router.get('/', orderController.getAll);

export default router;