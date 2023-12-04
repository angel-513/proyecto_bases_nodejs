import express from "express";
import config from "./config";
import ProductoRouter from "./routes/producto.routes";
import ClienteRouter from "./routes/cliente.routes";
import VentaRouter from "./routes/venta.routes";

const app = express();
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(ProductoRouter);
app.use(ClienteRouter);
app.use(VentaRouter);

export default app;