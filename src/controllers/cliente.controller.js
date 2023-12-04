import { getConnection, sql } from "../database/connection"
import { queries } from "../database/cliente.queries";

export const getCliente = async (req, res) => {
    try {
        const pool = await getConnection();
        const resultado = await pool.request().query(queries.getCliente);
        // console.log(resultado);

        res.send(resultado.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const postCliente = async (req, res) => {
    try {
        const {ClienteID, PNombre, SNombre, PApellido, SApellido, DireccionID, Telefono, Correo, Contrasena, FechaNacimiento} = req.body;

        if(ClienteID == null || PNombre == null || PApellido == null || DireccionID == null || Telefono == null || Contrasena == null || FechaNacimiento == null || Correo == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("CLienteID", sql.Char, CLienteID)
            .input("PNombre", sql.NVarChar, PNombre)
            .input("SNombre", sql.NVarChar, SNombre)
            .input("PApellido", sql.NVarChar, PApellido)
            .input("SApellido", sql.NVarChar, SApellido)
            .input("DireccionID", sql.Int, DireccionID)
            .input("Telefono", sql.NVarChar, Telefono)
            .input("Correo", sql.NVarChar, Correo)
            .input("Contrasena", sql.NVarChar, Contrasena)
            .input("FechaNacimiento", sql.Date, FechaNacimiento)
        .query(queries.postCliente);
        console.log(resultado);

        res.json({ClienteID, PNombre, SNombre, PApellido, SApellido, DireccionID, Telefono, Correo, Contrasena, FechaNacimiento});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getClienteById = async (req, res) => {
    try {
        const {ClienteID} = req.params;
        const pool = await getConnection();
        const resultado = await pool.request()
        .input("ClienteID", sql.Char, ClienteID)
        .query(queries.getClienteById);
        console.log(resultado);

        res.send(resultado.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deleteClienteById = async (req, res) => {
    try {
        const {ClienteID} = req.params;
        const pool = await getConnection();
        const resultado = await pool.request()
        .input("ClienteID", sql.Char, ClienteID)
        .query(queries.deleteClienteById);
        console.log(resultado);

        res.status(204).send("Elemento eliminado");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const putCliente = async (req, res) => {
    try {
        const {PNombre, SNombre, PApellido, SApellido, DireccionID, Telefono, Correo, Contrasena, FechaNacimiento} = req.body;
        const {ClienteID} = req.params;

        if(ClienteID == null || PNombre == null || PApellido == null || DireccionID == null || Telefono == null || Contrasena == null || FechaNacimiento == null || Correo == null) {
            return res.status(400).json({message: "Faltan datos"});
        }

        const pool = await getConnection();
        const resultado = await pool.request()
            .input("CLienteID", sql.Char, CLienteID)
            .input("PNombre", sql.NVarChar, PNombre)
            .input("SNombre", sql.NVarChar, SNombre)
            .input("PApellido", sql.NVarChar, PApellido)
            .input("SApellido", sql.NVarChar, SApellido)
            .input("DireccionID", sql.Int, DireccionID)
            .input("Telefono", sql.NVarChar, Telefono)
            .input("Correo", sql.NVarChar, Correo)
            .input("Contrasena", sql.NVarChar, Contrasena)
            .input("FechaNacimiento", sql.Date, FechaNacimiento)
        .query(queries.putCliente);
        console.log(resultado);

        res.json({ClienteID, PNombre, SNombre, PApellido, SApellido, DireccionID, Telefono, Correo, Contrasena, FechaNacimiento});
    } catch (error) {
        res.status(500).send(error.message);
    }
}