import { Router } from "express";
import { getCliente, postCliente, getClienteById, deleteClienteById, putCliente } from "../controllers/producto.controller";

const router = Router();

router.get('/cliente', getCliente);
router.post('/cliente', postCliente);
router.get('/cliente/:ClienteID', getClienteById);
router.delete('/cliente/:ClienteID', deleteClienteById);
router.put('/cliente/:ClienteID', putCliente);

export default router;