import { Router } from "express";
import { getProductos, postProducto, getProductoById, deleteProductoById, putProducto } from "../controllers/producto.controller";

const router = Router();

router.get('/producto', getProductos);
router.post('/producto', postProducto);
router.get('/producto/:ProductoID', getProductoById);
router.delete('/producto/:ProductoID', deleteProductoById);
router.put('/producto/:ProductoID', putProducto);

export default router;