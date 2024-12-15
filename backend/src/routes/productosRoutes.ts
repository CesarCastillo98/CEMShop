import {Router} from 'express';
import {
    getAllProductos,
    addProductos,
    getProductosById,
}from '../controller/productosController';

const router = Router();

router.get('/', getAllProductos);
router.post('/', addProductos);
router.get('/:id', getProductosById);

export default router;