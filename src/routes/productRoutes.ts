import { Router } from 'express';
import productController from '../controller/productController';

const router = Router();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;