import { getConnection, sql } from "../database/connection"
import { queries } from "../database/venta.queries";

export const getVenta = async (req, res) => {
    try {
        const pool = await getConnection();
        const resultado = await pool.request().query(queries.getVenta);
        // console.log(resultado);

        res.send(resultado.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const postVenta = async (req, res) => {
    try {
        const {VentaID, FechaVenta, TotalVenta, ClienteID, MetodoEntregaID, MetodoPagoID} = req.body;

        if(VentaID == null || FechaVenta == null || TotalVenta == null || ClienteID == null || MetodoEntregaID == null || MetodoPagoID == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("VentaID", sql.Int, VentaID)
            .input("FecheVenta", sql.Date, FecheVenta)
            .input("TotalVenta", sql.Decimal, TotalVenta)
            .input("ClienteID", sql.Char, ClienteID)
            .input("MetodoEntregaID", sql.Int, MetodoEntregaID)
            .input("MetodoPagoID", sql.Int, MetodoPagoID)
        .query(queries.postVenta);
        console.log(resultado);

        res.json({VentaID, FechaVenta, TotalVenta, ClienteID, MetodoEntregaID, MetodoPagoID});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getProductoById = async (req, res) => {
    try {
        const {ProductoID} = req.params;
        const pool = await getConnection();
        const resultado = await pool.request()
        .input("ProductoID", sql.Char, ProductoID)
        .query(queries.getProductoById);
        console.log(resultado);

        res.send(resultado.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deleteVentaById = async (req, res) => {
    try {
        const {VentaID} = req.params;
        const pool = await getConnection();
        const resultado = await pool.request()
        .input("VentaID", sql.Int, VentaID)
        .query(queries.deleteVentaById);
        console.log(resultado);

        res.status(204).send("Eemento eliminado");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const putProducto = async (req, res) => {
    try {
        const {FechaVenta, TotalVenta, ClienteID, MetodoEntregaID, MetodoPagoID} = req.body;
        const {VentaID} = req.params;

        if(VentaID == null || FechaVenta == null || TotalVenta == null || ClienteID == null || MetodoEntregaID == null || MetodoPagoID == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("VentaID", sql.Int, VentaID)
            .input("FecheVenta", sql.Date, FecheVenta)
            .input("TotalVenta", sql.Decimal, TotalVenta)
            .input("ClienteID", sql.Char, ClienteID)
            .input("MetodoEntregaID", sql.Int, MetodoEntregaID)
            .input("MetodoPagoID", sql.Int, MetodoPagoID)
        .query(queries.putVenta);
        console.log(resultado);

        res.json({VentaID, FechaVenta, TotalVenta, ClienteID, MetodoEntregaID, MetodoPagoID});
    } catch (error) {
        res.status(500).send(error.message);
    }
}