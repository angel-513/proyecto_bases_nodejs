import { Router } from "express";
import { getVenta, postVenta, getVentaById, deleteVentaById, putVenta } from "../controllers/producto.controller";

const router = Router();

router.get('venta', getVenta);
router.post('/venta', postVenta);
router.get('/venta/:VentaID', getVentaById);
router.delete('/venta/:VentaID', deleteVentaById);
router.put('/venta/:VentaID', putVenta);

export default router;