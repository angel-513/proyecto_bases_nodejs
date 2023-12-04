import { getConnection, sql } from "../database/connection"
import { queries } from "../database/producto.queries";

export const getProductos = async (req, res) => {
    try {
        const pool = await getConnection();
        const resultado = await pool.request().query(queries.getProducto);
        // console.log(resultado);

        res.send(resultado.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const postProducto = async (req, res) => {
    try {
        const {ProductoID, NombreProducto, Descripcion, PrecioCompra, PrecioVenta, StockActual, StockMinimo, ProveedorID, MarcaID} = req.body;

        if(ProductoID == null || NombreProducto == null || PrecioCompra == null || PrecioVenta == null || StockActual == null || StockMinimo == null || ProveedorID == null || MarcaID == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("ProductoID", sql.Char, ProductoID)
            .input("NombreProducto", sql.NVarChar, NombreProducto)
            .input("Descripcion", sql.NVarChar, Descripcion)
            .input("PrecioCompra", sql.Decimal, PrecioCompra)
            .input("PrecioVenta", sql.Decimal, PrecioVenta)
            .input("StockActual", sql.Decimal, StockActual)
            .input("StockMinimo", sql.Decimal, StockMinimo)
            .input("ProveedorID", sql.Int, ProveedorID)
            .input("MarcaID", sql.Int, MarcaID)
        .query(queries.postProducto);
        console.log(resultado);

        res.json({ProductoID, NombreProducto, Descripcion, PrecioCompra, PrecioVenta, StockActual, StockMinimo, ProveedorID, MarcaID});
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

export const deleteProductoById = async (req, res) => {
    try {
        const {ProductoID} = req.params;
        const pool = await getConnection();
        const resultado = await pool.request()
        .input("ProductoID", sql.Char, ProductoID)
        .query(queries.deleteProductoById);
        console.log(resultado);

        res.status(204).send("Eemento eliminado");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const putProducto = async (req, res) => {
    try {
        const {NombreProducto, Descripcion, PrecioCompra, PrecioVenta, StockActual, StockMinimo, ProveedorID, MarcaID} = req.body;
        const {ProductoID} = req.params;

        if(ProductoID == null || NombreProducto == null || PrecioCompra == null || PrecioVenta == null || StockActual == null || StockMinimo == null || ProveedorID == null || MarcaID == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("ProductoID", sql.Char, ProductoID)
            .input("NombreProducto", sql.NVarChar, NombreProducto)
            .input("Descripcion", sql.NVarChar, Descripcion)
            .input("PrecioCompra", sql.Decimal, PrecioCompra)
            .input("PrecioVenta", sql.Decimal, PrecioVenta)
            .input("StockActual", sql.Decimal, StockActual)
            .input("StockMinimo", sql.Decimal, StockMinimo)
            .input("ProveedorID", sql.Int, ProveedorID)
            .input("MarcaID", sql.Int, MarcaID)
        .query(queries.putProducto);
        console.log(resultado);

        res.json({ProductoID, NombreProducto, Descripcion, PrecioCompra, PrecioVenta, StockActual, StockMinimo, ProveedorID, MarcaID});
    } catch (error) {
        res.status(500).send(error.message);
    }
}